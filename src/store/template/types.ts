export type templateProps = {
  content: string
  style?: {
    [k: string]: string
  }
  extensions?: {
    [k: string]: any
  }
}

export type templatePart = {
  id: string
  title: string
  icon: any
  component: {
    base: any
    editor: any
  }
  defaultProps: templateProps
}

export type templateConfig = {
  id: string
  component: string
  props: templateProps
}

export interface IState {
  registered: templatePart[]
  elements: templateConfig[]
  editingId: string | null
  loaded: boolean
  backward: templateConfig[]
  forward: templateConfig[]
}