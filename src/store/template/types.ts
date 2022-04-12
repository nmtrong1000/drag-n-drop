export type templatePart = {
  id: string
  title: string
  icon: any
  component: {
    base: any
    editor: any
  }
}

export type templateConfig = {
  id: string
  component: string
  props: {
    content: string
    style?: {
      [k: string]: string
    }
    extensions?: {
      [k: string]: string | number
    }
  }
}

export interface IState {
  registered: templatePart[]
  elements: templateConfig[]
  editingId: string | null
}