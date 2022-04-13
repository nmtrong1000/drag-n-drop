import { defineStore } from 'pinia'
import type { IState, TemplateConfig } from './types'
import { HandledError } from 'src/helpers/HandledError'
import { saveTemplate, getTemplate } from 'src/api'
import { generateId } from 'src/helpers'

const initialState: IState = {
  registered: [],
  elements: [],
  editingId: null,
  loaded: false,
  history: ['[]'],
  historyHead: 0,
  saved: false
}

export const useTemplateStore = defineStore( 'template', {
  state: () => ( { ...initialState } ),
  actions: {
    register( parts ) {
      this.registered = [...parts]
    },
    reloadFromCache() {
      const cached = getTemplate()

      if( cached ) {
        try {
          this.elements = [...JSON.parse( cached )]
        } catch {
          saveTemplate( [] )
          throw new HandledError( 'Failed to load cached template.' )
        }

        this.loaded = true
      } else {
        saveTemplate( [] )
      }
    },
    loadTemplate() {
      if( this.loaded ) return
      this.reloadFromCache()
    },
    import( data ) {
      saveTemplate( data )
      this.reloadFromCache()
    },
    insert( { id, defaultProps }: TemplatePart ) {
      const config: TemplateConfig = {
        id: generateId(),
        component: id,
        props: {
          ...defaultProps
        }
      }

      this.editingId = config.id
      this.elements.push( config )
    },
    remove( config: TemplateConfig ) {
      this.elements.splice( this.elements.indexOf( config ), 1 )
    },
    moveUp( config: TemplateConfig ) {
      const idx = this.elements.indexOf( config )

      if( idx > 0 ) {
        this.elements.splice( idx, 1 )
        this.elements.splice( idx - 1, 0, config )
      }
    },
    moveDown( config: TemplateConfig ) {
      const idx = this.elements.indexOf( config )

      if( idx < this.elements.length - 1 ) {
        this.elements.splice( idx, 1 )
        this.elements.splice( idx + 1, 0, config )
      }
    },
    save() {
      const json = JSON.stringify( this.elements )

      saveTemplate( this.elements )
      this.history.push( json )
      this.historyHead = this.history.length - 1
    },
    loadHistory() {
      try {
        this.elements = JSON.parse( this.history[this.historyHead] )
      } catch {
        this.reloadFromCache()
        throw new HandledError( 'Failed to load cached template.' )
      }
    },
    undo() {
      if( this.history.length > 0 && this.historyHead !== 0 ) {
        this.historyHead--
      }

      this.loadHistory()
    },
    redo() {
      if( this.history.length > 0 && this.historyHead < this.history.length - 1 ) {
        this.historyHead++
      }

      this.loadHistory()
    },
    resetFields() {
      this.history = []
      this.historyHead = 0
      this.editingId = null
    }
  }
} )