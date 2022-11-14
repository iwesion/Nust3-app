<!--
 * @Author: wesion
 * @Date: 2022-10-31 17:57:05
 * @LastEditTime: 2022-10-31 18:53:08
 * @Description: 
-->
<template>
  <div class="xpg">
    <h1>Adaptive Page</h1>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style  lang="less">
@media screen and (min-width: 768px) {
    .xpg{
        background-color: aqua;
    }
  }
  @media screen and (max-width: 768px) {
    .xpg{
        background-color:bisque;
    }
  }
</style>