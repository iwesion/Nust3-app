/*
 * @Author: wesion
 * @Date: 2022-10-26 14:35:47
 * @LastEditTime: 2022-10-26 14:37:54
 * @Description: 
 */
export default defineNuxtRouteMiddleware((to, from) => {
  console.log("要去那个页面:"+to.path)
  console.log("来自那个页面:"+from.path)
    
  })