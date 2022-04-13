import { defineStore } from 'pinia'
import type { IState, TemplatePart, TemplateConfig } from './types'

const initialState: IState = {
  registered: [],
  elements: [],
  editingId: null,
  loaded: false,
  history: [],
  historyHead: 0
}

export const useTemplateStore = defineStore( 'template', {
  state: () => ( { ...initialState } ),
  actions: {
    register( parts ) {
      this.registered = [...parts]
    },
    reloadFromCache() {
      const cached = localStorage.getItem( 'template' )

      if( cached ) {
        this.elements = [...JSON.parse( cached )]
        this.loaded = true
      } else {
        localStorage.setItem( 'template', '[]' )
      }
    },
    loadTemplate() {
      if( this.loaded ) return
      this.reloadFromCache()
    },
    importTemplate( data ) {
      localStorage.setItem( 'template', JSON.stringify( data ) )
      this.reloadFromCache()
    },
    insert( { id, defaultProps }: TemplatePart ) {
      const config: TemplateConfig = {
        id: `${Date.now()}-${Math.floor( Math.random() * 1000 )}`,
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

      localStorage.setItem( 'template', json )
      this.history.push( json )
      this.historyHead = this.history.length - 1
    },
    loadHistory() {
      if( this.history[this.historyHead] ) {
        this.elements = JSON.parse( this.history[this.historyHead] )
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