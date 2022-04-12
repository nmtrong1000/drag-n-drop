import { defineAsyncComponent, markRaw } from 'vue'
import type { templatePart } from './types'
import {
  CirclePlus,
  Document
} from '@element-plus/icons-vue'

export const templateConfig: templatePart[] = [
  {
    id: 'template-button',
    title: 'Button',
    icon: CirclePlus,
    component:{
      base: markRaw( defineAsyncComponent( () => import( 'src/components/templates/Button/index.vue' ) ) ),
      editor: markRaw( defineAsyncComponent( () => import( 'src/components/templates/Button/ButtonEditor.vue' ) ) )
    }
  },
  {
    id: 'template-paragraph',
    title: 'Paragraph',
    icon: Document,
    component: {
      base: markRaw( defineAsyncComponent( () => import( 'src/components/templates/Paragraph/index.vue' ) ) ),
      editor: markRaw( defineAsyncComponent( () => import( 'src/components/templates/Paragraph/ParagraphEditor.vue' ) ) )
    }
  }
]