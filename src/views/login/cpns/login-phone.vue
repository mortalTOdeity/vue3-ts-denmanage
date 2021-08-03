<template>
  <div class="login-account">
    <el-form label-width="60px">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div class="get-code">
          <el-input v-model="phone.vcode" prop="vcode"></el-input>
          <el-button type="primary" class="send-code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      vcode: ''
    })
    const loginAction = () => {
      console.log('doLogin')
    }

    return {
      phone,
      loginAction
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}
.send-code {
  margin-left: 8px;
}
</style>
