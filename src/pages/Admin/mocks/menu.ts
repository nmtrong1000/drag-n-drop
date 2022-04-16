import {
  View,
  Upload,
  Download,
  RefreshLeft,
  RefreshRight,
  Check
} from '@element-plus/icons-vue'

type menuItem = {
  id: string
  title: string
  icon: any
  type: '' | 'primary' | 'success' | 'warning' | 'info' | 'danger'
}

export const menu: menuItem[] = [
  {
    id: 'action-save',
    title: 'Save',
    icon: Check,
    type: 'success'
  },
  {
    id: 'action-undo',
    title: 'Undo',
    icon: RefreshLeft,
    type: ''
  },
  {
    id: 'action-redo',
    title: 'Redo',
    icon: RefreshRight,
    type: ''
  },
  {
    id: 'action-export',
    title: 'Export',
    icon: Download,
    type: 'info'
  },
  {
    id: 'action-import',
    title: 'Import',
    icon: Upload,
    type: 'info'
  },
  {
    id: 'action-view',
    title: 'View',
    icon: View,
    type: 'primary'
  }
]