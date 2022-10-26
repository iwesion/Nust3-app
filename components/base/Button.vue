<!--
 * @Author: wesion
 * @Date: 2022-10-26 14:25:52
 * @LastEditTime: 2022-10-26 14:29:00
 * @Description: 
-->
<template>
    <div>
        <button @click="enableBaseButtom">Base Button</button>
    </div>
</template>
<script setup>
    function enableBaseButtom(){
        console.log('点击了baseButton')
    }
</script>