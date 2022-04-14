# Drag n Drop

## What is this?

This is a extendable, light-weight VueJS project to create custom templates. The drag and drop template part is one of the most remarkable features.

Template parts that are currently supported: Button, Paragraph.

Besides, it is easy to extend template parts by changing config and including custom template parts.

### Design Pattern
  - This project refer to [Module Pattern](https://en.wikipedia.org/wiki/Module_pattern) which separates components into independent directories.
  - The reasons why I prefer this pattern:
    - Components **would be easily integrated or removed** without concerned about links.
    - Easy to debug, implement tests.

### Tech stack implementation
  - [Vue 3](https://vuejs.org/guide/introduction.html): The main front-end framework to build user interface.
  - [Vue Router](https://router.vuejs.org/installation.html): Site travel routes
  - [Pinia](https://pinia.vuejs.org/introduction.html): State Management
  - [Element Plus](https://element-plus.org/en-US/guide/design.html): UX/UI library
  - [Vue Quill](https://vueup.github.io/vue-quill/guide/): Advanced text editor
  - [Vite](https://vitejs.dev/guide/): A very useful frontend devtools
  - [Eslint](https://eslint.org/): Code linter
  - [Stylelint](https://stylelint.io/): Stylesheet linter

## 1. Installation

```bash
git clone https://github.com/nmtrong1000/drag-n-drop
cd drag-n-drop
yarn install
yarn dev

# The result will then be displayed on
# http://localhost:3000
```

## 2. Features

### Admin
1. Template
  - Save
  - Import/Export to JSON
  - Undo/Redo
  - View Template

2. Template Part
  - Drag and Drop
  - Remove
  - Move Up/Down
  - Edit
    - Content
    - Style
    - Extension attributes

### Consumer
- Display saved template

## 3. Extending template parts

### 1. Prepare template part

  1. Go to `src/template-parts`.
  2. Copy the directory named `Sample` and rename as you want.
  3. There are two files:  
    - `Base.vue`: The result that will be displayed on Consumer page.  
    - `Editor.vue`: Where you can edit your template part.

### 2. Configuration

After added the template components, go to `src/config/index.ts` and config as below:

```ts
{
  id: string, // Unique template ID
  title: string,
  icon: Object, // Icon to display on navigation
  component: getTemplateComponents('Sample'), // Template part's directory name
  defaultProps: {
    content: string, // HTML or text to display in Consumer page
    style?: {
      // DOM style object:
      // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
    },
    extensions?: {
      // Additional attributes
    }
  }
}
```

For example:
```ts
// Sample config
export const templateParts: TemplatePart[] = [
  {
    id: 'template-id',
    title: 'Title',
    icon: CirclePlus,
    component: getTemplateComponents('Sample'),
    defaultProps: {
      content: '',
      style: {
        color: '#000000',
        backgroundColor: 'transparent'
      },
      extensions: {
        actionMsg: ''
      }
    }
  }
]
```

## 4. To-do

- Image Upload
- Fix minor issues from the drag/drop feature
- Integrate with backend
- Unit test