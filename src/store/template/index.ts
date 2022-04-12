import { defineStore } from 'pinia'
import type { IState, templatePart, templateConfig } from './types'

const initialState: IState = {
  registered: [],
  elements: [],
  editingId: null,
  loaded: false,
  backward: [],
  forward: []
}

export const useTemplateStore = defineStore( 'template', {
  state: () => ({ ...initialState }),
  actions: {
    register( parts ) {
      this.registered = [...parts]
    },
    reloadFromCache() {
      const cached = localStorage.getItem('template')
      if( cached ) {
        this.elements = [...JSON.parse(cached)]
        this.loaded = true
      } else {
        localStorage.setItem('template', '[]')
      }
    },
    loadTemplate() {
      if(this.loaded) return
      this.reloadFromCache()
    },
    importTemplate(data) {
      localStorage.setItem('template', JSON.stringify(data))
      this.reloadFromCache()
      console.log('imported')
    },
    insert( { id, defaultProps }: templatePart ) {
      const config: templateConfig = {
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        component: id,
        props: {
          ...defaultProps
        }
      }
      this.editingId = config.id
      this.elements.push(config)
    },
    remove(config: templateConfig) {
      this.elements.splice( this.elements.indexOf(config), 1 )
    },
    moveUp(config: templateConfig) {
      const idx = this.elements.indexOf(config)
      if( idx > 0 ) {
        this.elements.splice(idx, 1)
        this.elements.splice(idx - 1, 0, config)
      }
    },
    moveDown(config: templateConfig) {
      const idx = this.elements.indexOf(config)
      if( idx < this.elements.length - 1 ) {
        this.elements.splice(idx, 1)
        this.elements.splice(idx + 1, 0, config)
      }
    },
    save() {
      localStorage.setItem('template', JSON.stringify(this.elements))
      this.backward = [...this.elements]
    },
    undo() {
      
    },
    redo() {
      
    }
  }
} )