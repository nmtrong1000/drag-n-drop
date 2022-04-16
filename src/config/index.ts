import { defineAsyncComponent, markRaw } from 'vue'
import {
  CirclePlus,
  Document
} from '@element-plus/icons-vue'

function importTemplate( path: string ) {
  return markRaw( defineAsyncComponent( () => import( /* @vite-ignore */ path ) ) )
}

function getTemplateComponents( name: string ) {
  return {
    base: importTemplate( `../template-parts/${name}/Base.vue` ),
    editor: importTemplate( `../template-parts/${name}/Editor.vue` )
  }
}

export const templateParts: TemplatePart[] = [
  {
    id: 'template-button',
    title: 'Button',
    icon: CirclePlus,
    component: getTemplateComponents( 'Button' ),
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
    component: getTemplateComponents( 'Paragraph' ),
    defaultProps: {
      content: 'Paragraph'
    }
  }
]