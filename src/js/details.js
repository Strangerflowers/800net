/* 
* @Author: Marte
* @Date:   2018-10-24 20:45:34
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-25 15:04:04
*/

jQuery(function($){
    var params=decodeURI(location.search).slice(1);
    var name=document.querySelector(".new_head h1");
    var price=document.querySelector(".detail_p del i");
    var sale=document.querySelector(".detail_p strong i");
    var qty=document.querySelector(".i_qty");
    
    // var sale=document.querySelector(".detail_p strong i");
    $.ajax({
        type:"get",
        url:"../api/goodslist_url.php",
        data:{
            currentId:params
        },
        success:function(data){
            var obj=JSON.parse(data);
            var Img=document.querySelector(".details_left");
            price.innerText=obj.price;
            name.innerText=obj.name;
            sale.innerText=obj.sale;
            obj.qty=qty.value;
           Img.innerHTML= `<div class="big_pic">
                                <img src="${obj.imgurl}" height="400" width="400" data-big="${obj.imgurl}" />
                            </div>
                            <div class="small_pic">
                                <img  class="small1" src="${obj.img1}" data-big="${obj.img1}" />
                                <img class="small2" src="${obj.img2}" data-big="${obj.img2}"  />
                                <img class="small3" src="${obj.img3}" data-big="${obj.img3}"  />
                                <img class="small4" src="${obj.img4}" data-big="${obj.img4}" />
                                <img class="small5" src="${obj.img5}"  data-big="${obj.img5}"/>
                                <img  class="small6"src="${obj.img6}"  data-big="${obj.img6}" />
                            </div>`

            // 放大镜插件
            $('.big_pic').lxzoom({width:500,height:200}).addClass('box');

            $('.small_pic').on('click','img',function(){
                $('.big_pic img').attr({
                    'src':this.src,
                    'data-big':this.dataset.big
                });
            })
            var total;
            var btnqty=document.querySelector(".d_qty");
            btnqty.onclick=function(e){
                e= e|| window.event;
                var target = e.target ||e.srcElement;
                // 判断点击的是否为“-”，若是则qty--
                if(target.className==="jian"){
                    obj.qty--;
                    qty.value=obj.qty;
                    total=obj.qty*obj.sale;
                    obj.total=total;
                    // console.log("total",total);
                }
                // 判断点击的是否为“+”，若是则qty++：
                if(target.className==="jia"){
                    obj.qty++;
                    qty.value=obj.qty;
                    total=obj.qty*obj.sale;
                    obj.total=total;
                    // console.log("total",total);
                }
            }
           
            console.log(obj.total);
             // 获取商品的颜色与码数
            var color=document.querySelector(".color");
            var size=document.querySelector(".size");
            var lis=document.querySelectorAll(".size span");
            var lic=document.querySelectorAll(".color span");
            // 选取颜色
            color.onclick=function(e){
                console.log(e.target);
                if(e.target.tagName.toLowerCase()==='span'){
                    for(let i=0;i<lic.length;i++){
                        lic[i].style.border="1px solid #ccc";
                    }
                    e.target.style.border="1px solid #f00";
                    obj.color=e.target.innerText;
                }
            }
            // 选取尺码
            size.onclick=function(e){
                if(e.target.tagName.toLowerCase()==='span'){
                    for(let i=0;i<lis.length;i++){

                        lis[i].style.border="1px solid #ccc";
                    }
                    e.target.style.border="1px solid #f00";
                    obj.size=e.target.innerText;
                }
            }

            console.log(obj);
            // var tocart=document.querySelector(".add2cart");
            $(".add2cart").on("click",function(event){
                var target =event.target;
                console.log(target.className);
                if(target.className==="add2cart"){
                    $.ajax({
                        type:"get",
                        url:"../api/details.php",
                        data:{
                            currentId:obj.id,
                            Img:obj.imgurl,
                            username:obj.name,
                            color:obj.color,
                            size:obj.size,
                            qty:obj.qty,
                            price:obj.price,
                            sale:obj.sale,

                        },
                        success:function(data){
                            console.log(data);
                            location.href="../html/cart.html";
                        }
                    })
                }
            })



        }
    })
 

   
});