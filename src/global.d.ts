export {}

/**
 * Global type definition
 */
declare global {
  type TemplatePart = {
    id: string
    title: string
    icon: any
    component: {
      base: any
      editor: any
    }
    defaultProps: TemplateProps
  }
}