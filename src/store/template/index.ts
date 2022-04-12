import { defineStore } from 'pinia'
import type { IState } from './types'

const initialState: IState = {
  registered: [],
  elements: [
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      component: 'template-paragraph',
      props: {
        content: 'demo',
        style: {
          color: 'red'
        }
      }
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      component: 'template-button',
      props: {
        content: 'demo',
        style: {
          color: 'red'
        }
      }
    }
  ],
  editingId: null
}

export const useTemplateStore = defineStore( 'template', {
  state: () => ({ ...initialState }),
  actions: {
    register( parts ) {
      this.registered = [...parts]
    }
  }
} )