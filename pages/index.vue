<!--
 * @Author: wesion
 * @Date: 2022-10-27 10:12:38
 * @LastEditTime: 2022-10-31 16:01:51
 * @Description: 
-->
<template>
    <div>
        
        <h1>Index Page</h1>
        <p>{{$t("title")}}</p>
        <br/>
        <NuxtLink to="/detail">Go Detail Page</NuxtLink>
        <br/>
        <NuxtLink to="/user-admin/dd">Go User Page</NuxtLink>
        <br/>
        <NuxtLink to="/about">Go About</NuxtLink>
        <br/>
        <NuxtLink to="/parent/">Go parent Page</NuxtLink>
        <br/>
        <NuxtLink to="/demo1">通用layout布局orcustom布局</NuxtLink>
        <br/>
        <NuxtLink to="/idea">Go Idea Page</NuxtLink>
        <br/>
        <NuxtLink to="/dddd/28">Go [[live]] Page</NuxtLink>
        <br/>
        <BaseButton></BaseButton>
        
    </div>
</template>
<script>
  
</script>