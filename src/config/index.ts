import { defineAsyncComponent, markRaw } from 'vue'
import {
  CirclePlus,
  Document
} from '@element-plus/icons-vue'

export const templateParts: TemplatePart[] = [
  {
    id: 'template-button',
    title: 'Button',
    icon: CirclePlus,
    component:{
      base: markRaw( defineAsyncComponent( () => import( 'src/template-parts/Button/ButtonBase.vue' ) ) ),
      editor: markRaw( defineAsyncComponent( () => import( 'src/template-parts/Button/ButtonEditor.vue' ) ) )
    },
    defaultProps: {
      content: 'Button',
      style: {
        color: '#000000',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#ddd',
        padding: '10px',
        backgroundColor: 'transparent'
      },
      extensions: {
        actionMsg: '',
        position: 'left'
      }
    }
  },
  {
    id: 'template-paragraph',
    title: 'Paragraph',
    icon: Document,
    component: {
      base: markRaw( defineAsyncComponent( () => import( 'src/template-parts/Paragraph/ParagraphBase.vue' ) ) ),
      editor: markRaw( defineAsyncComponent( () => import( 'src/template-parts/Paragraph/ParagraphEditor.vue' ) ) )
    },
    defaultProps: {
      content: 'Paragraph',
      style: {
        color: '#000000'
      }
    }
  }
]