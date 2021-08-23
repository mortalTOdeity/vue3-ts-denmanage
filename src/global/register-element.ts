import 'element-plus/lib/theme-chalk/index.css'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElIcon,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker
} from 'element-plus'
import { App } from 'vue'
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElIcon,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
