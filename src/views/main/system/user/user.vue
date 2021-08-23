<template>
  <div class="user">
    <div class="search">
      <den-form :formItems="formItems"></den-form>
    </div>
    <div class="content"></div>
    <div>user page</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DenForm, { IFromItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    DenForm
  },
  setup() {
    const formItems: IFromItem[] = [
      {
        label: '用户名',
        rules: [],
        placeholder: '请输入用户名'
      },
      {
        label: '密码',
        rules: [],
        placeholder: '请输入密码'
      },
      {
        label: '喜欢的运动',
        rules: [],
        placeholder: '请选择喜欢的运动'
      },
      {
        label: '创建时间',
        rules: [],
        placeholder: '请选择创建时间范围'
      }
    ]
    return {
      formItems
    }
  }
})
</script>

<style scoped></style>
