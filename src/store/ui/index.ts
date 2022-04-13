import { defineStore } from 'pinia'
import type { IState } from './types'

const initialState: IState = {
  overlay: false,
  loading: false,
  loadingText: '',
  sidebar: {
    edit: false,
    select: false
  }
}

export const useUIStore = defineStore( 'ui', {
  state: () => ( { ...initialState } ),
  actions: {
    toggleLoading( msg = 'Processing' ) {
      this.loading = !this.loading
      this.overlay = this.loading
      if( this.loading ) {
        this.loadingText = msg
      }
    },
    toggleSidebar( element: string ) {
      this.sidebar[element] = !this.sidebar[element]
      this.overlay = this.sidebar[element]
    },
    reset() {
      const { overlay, loading, sidebar } = initialState

      this.overlay = overlay
      this.loading = loading
      for( const p of Object.keys( sidebar ) ) {
        this.sidebar[p] = false
      }
    }
  }
} )