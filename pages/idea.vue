<!--
 * @Author: wesion
 * @Date: 2022-10-27 16:22:33
 * @LastEditTime: 2022-10-28 16:58:20
 * @Description: 
-->
<template>
  <div class="">
    <h1>Idea Page</h1>
    <!-- <p v-t="'businessMode[0].desc'"></p>
    <p v-html="$t('message.hello')"></p> -->
    <p>{{ $t('homeMode.desc', ['desc']) }}</p>
    <p>{{$t('businessMode[0].desc', ["desc"])}}</p>
    <!-- <p v-html="$t('ideaMode.missionData[1].desc')"></p>
    <p v-t="{ path: 'ideaMode.missionData[1].desc' }"></p> -->
    <p>{{ $t('customMessage.hello', { msg: 'hello' }) }}</p>
    <p>{{ $t('customMessage1.title', { a: 'hello' ,b:111}) }}</p>
    <p>{{ $t('customMessage2.title', ["第一个","第二"]) }}</p>
    <p v-for="content in $tm('businessMode')">
        <h2>{{ $rt(content.desc) }}</h2>
    </p>
    <p v-for="content in $tm('ideaMode.missionData')">
        <h2>{{ $rt(content.desc) }}</h2>
    </p>
    <p>{{$t(("testHomeMode.title"))}}</p>
    <!-- *   <template v-for="content in $tm('contents')">
     *     <h2>{{ $rt(content.title) }}</h2>
     *     <p v-for="paragraph in content.paragraphs">
     *      {{ $rt(paragraph) }}
     *     </p>
     *   </template> -->
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
    const { t ,locale} = useI18n();
    // ideaMode:missionData
    console.log(t("businessMode[0].desc"))
    // console.log(t("ideaMode.missionData[0].desc"))
    // console.log(t("ideaMode.missionData"))
</script>

<style scoped></style>