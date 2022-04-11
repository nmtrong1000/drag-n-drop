import { defineStore } from 'pinia'
import type { IState } from './types'

const initialState: IState = {
  counter: 0
}

export const useSampleStore = defineStore( 'sample', {
  state: () => ({ ...initialState }),
  getters: {
    doubleCounter: state => state.counter * 2
  },
  actions: {
    decreaseCounter( amount = 1 ) {
      this.counter -= amount
    }
  }
} )