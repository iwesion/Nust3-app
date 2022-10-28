/*
 * @Author: wesion
 * @Date: 2022-10-27 15:41:34
 * @LastEditTime: 2022-10-27 17:54:15
 * @Description: 
 */
import {createI18n} from 'vue-i18n';
import en from '@/locales/en';
import zh from '@/locales/zh';

export default defineNuxtPlugin((nuxtApp) =>{
    const i18n = createI18n({
        legacy:false,
        globalInjection:true,
        locale:'zh',
        messages: {
          en,
          zh
        },
        flatJson:true
      })

      nuxtApp.vueApp.use(i18n)
})