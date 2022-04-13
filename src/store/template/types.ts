export type templateProps = {
  content: string
  style?: {
    [k: string]: string
  }
  extensions?: {
    [k: string]: any
  }
}

export type TemplatePart = {
  id: string
  title: string
  icon: any
  component: {
    base: any
    editor: any
  }
  defaultProps: templateProps
}

export type TemplateConfig = {
  id: string
  component: string
  props: templateProps
}

export interface IState {
  registered: TemplatePart[]
  elements: TemplateConfig[]
  editingId: string | null
  loaded: boolean
  history: string[]
  historyHead: number
}