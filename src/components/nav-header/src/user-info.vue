<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="size" :src="circleUrl"></el-avatar>
        <span>{{name}}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close">退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup () {
    const store = useStore()
    const name = computed(() => {
      return store.state.login.userInfo
      })
    const circleUrl = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.zhimg.com%2Fv2-4e96f1110cb872407e837d4fc1440f96_1200x500.jpg&refer=http%3A%2F%2Fpic3.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632223662&t=72368b42c4bb26c1e5a6085b5fac0555'
    return {
      name
    }
  }
})
</script>

<style scoped>
  /* .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  } */
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
