import { defineStore } from 'pinia'
import type { IState } from './types'

const initialState: IState = {
  registered: {}
}

export const useTemplateStore = defineStore( 'template', {
  state: () => ({ ...initialState }),
  actions: {
    register( elements ) {
      this.registered = { ...elements }
    }
  }
} )