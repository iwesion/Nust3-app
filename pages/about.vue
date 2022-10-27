<!--
 * @Author: wesion
 * @Date: 2022-10-27 11:05:21
 * @LastEditTime: 2022-10-27 11:06:13
 * @Description: 
-->
<template>
    <div>
        <NuxtLink to="/" >回到首页</NuxtLink>
    </div>
</template>
<script setup lang="ts">
    definePageMeta({
    pageTransition: {
        name: 'rotate'
    }
    })
</script>