/*
 * @Description: 美化滚动条入口
 * @User: lyy
 * @Date: 2022-05-06 10:21:48
 */
import scrollbar from './src/scrollbar.vue';

export default {
  install: function(Vue){
    Vue.component('AScrollbar', scrollbar);
  }
};