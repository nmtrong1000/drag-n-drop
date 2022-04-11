import {
  CirclePlus,
  Document
} from '@element-plus/icons-vue'

type templatePart = {
  id: string
  title: string
  icon: any
}

export const templateParts: templatePart[] = [
  {
    id: 'template-button',
    title: 'Button',
    icon: CirclePlus
  },
  {
    id: 'template-paragraph',
    title: 'Paragraph',
    icon: Document
  }
]