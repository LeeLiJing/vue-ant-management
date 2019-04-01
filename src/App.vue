<template>
    <a-locale-provider :locale="zh_CN" id="app">
        <router-view/>
    </a-locale-provider>
</template>

<script>
  import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

  export default {
    name: 'App',
    data () {
      return {
        zh_CN,
      }
    }
  }
</script>

