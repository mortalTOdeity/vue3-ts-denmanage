<template>
  <div class="den-form">
    <el-form label-width="100px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input> </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFromItem } from '../types/index'

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFromItem[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
