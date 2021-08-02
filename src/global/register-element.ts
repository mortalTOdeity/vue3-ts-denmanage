import 'element-plus/lib/theme-chalk/index.css'
import { ElButton, ElForm, ElFormItem, ElInput, ElRadio } from 'element-plus'
import { App } from 'vue'
const components = [ElButton, ElForm, ElFormItem, ElInput, ElRadio]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
