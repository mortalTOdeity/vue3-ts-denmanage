<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <den-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import denBreadcrumb from '@/base-ui/breadcrumb'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    UserInfo,
    denBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑的数据
    const store = useStore()
    const breadcrumbs = computed(() => {
      const route = useRoute()
      const currentPath = route.path
      const userMenus = store.state.login.userMenus
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  font-weight: 700;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
    border: 0;
  }
}
</style>
