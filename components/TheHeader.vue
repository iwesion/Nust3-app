<!--
 * @Author: wesion
 * @Date: 2022-10-26 14:22:20
 * @LastEditTime: 2022-10-27 16:07:29
 * @Description: 
-->
<template>
    <div>我是header</div>
    <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          切换语言 {{ lang }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['zh', 'en'] }
  }
}
</script>