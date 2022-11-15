<!--
 * @Author: wesion
 * @Date: 2022-10-26 10:43:35
 * @LastEditTime: 2022-11-14 15:49:13
 * @Description: 
-->
<template>
    <div>
        <h1> Detail Page</h1>
        <el-row class="mb-4" >
            <el-col :xs="24" :sm="8" v-for="item in [1,2,3,4]">
                <el-button type="primary">Primary</el-button>
            </el-col>
            
        </el-row>
        <br />
        <el-button class="hidden-xs-only">Default</el-button>
            <el-button class="hidden-sm-and-down" type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
    </div>
</template>
<script>

</script>

<style>
</style>