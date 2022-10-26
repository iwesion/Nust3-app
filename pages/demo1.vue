<!--
 * @Author: wesion
 * @Date: 2022-10-26 14:07:05
 * @LastEditTime: 2022-10-26 14:19:46
 * @Description: 
-->
<template>
 <div>
        测试layout
    <div>
        <button @click="enableCustomLayout">Update layout</button>
    </div>
</div>
</template>
<script setup>
    function enableCustomLayout () {
    setPageLayout('custom')
    }
    definePageMeta({
    layout: false,
    });
</script>