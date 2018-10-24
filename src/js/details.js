/* 
* @Author: Marte
* @Date:   2018-10-24 20:45:34
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-24 21:02:42
*/

jQuery(function($){
            // 插件是否支持链式调用

    $('.big_pic').lxzoom({width:500,height:200}).addClass('box');

    $('.small').on('click','img',function(){
        $('.goods img').attr({
            'src':this.src,
            'data-big':this.dataset.big
        });
    })
});