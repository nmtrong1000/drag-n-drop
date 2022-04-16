export type TemplateProps = {
  content: string
  style?: {
    [k: string]: string
  }
  extensions?: {
    [k: string]: any
  }
}

export type TemplateConfig = {
  id: string
  component: string
  props: TemplateProps
}

export interface IState {
  registered: TemplatePart[]
  elements: TemplateConfig[]
  editingId: string | null
  loaded: boolean
  history: string[]
  historyHead: number
  saved: boolean
}