/*
 * @Author: wesion
 * @Date: 2022-11-14 14:21:13
 * @LastEditTime: 2022-11-14 14:50:55
 * @Description: 
 */
import * as ElementPlus from 'element-plus/dist/index.full'

 
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus)
})