/* 
* @Author: Marte
* @Date:   2018-10-25 15:06:11
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-25 21:22:48
*/
jQuery(function($){
    var $list=$(".list");
    var $ul=$(".cartlist");
    
    $.ajax({
        type:"get",
        url:"../api/cart.php",
        data:{

        },
        success:function(data){
            var arr=JSON.parse(data);
            var totalPrice=document.querySelector(".zongjia");
            var total;
            // console.log(data);
            render(arr);
            function render(arr){
              
                var res='';
                $.map(arr,function(item){
                total=item.qty*item.sale;
                return res+=`<li date-guid="${item.id}">
                            <div class="duoxuan2 fl"><input type="checkbox" id="checkbox" /></div>
                            <div class="tupian fl">     
                                <img src="${item.imgurl}" alt="" />
                            </div>
                            <div class="txt fl"><a href="#">${item.name}</a></div>
                            <div class="color fl">
                                <p >颜色：<span>[${item.color}]</span></p>
                                <p >尺寸:<span >[${item.size}]</span></p>
                            </div>
                            <div class="price fl">
                                <span>￥：${item.sale}</span><br />
                                <del>￥:${item.price}</del><br /> 
                            </div>
                            <div class="cart_input fl">
                                <input type="button" value="-" class="jian"/>
                                <input type="text"class="ci_qty"  value="${item.qty}" />
                                <input type="button" value="+"  class="jia"/>
                            </div>
                            <div class="sale zongjia fl">￥：${total}</div>
                            <div class="shoucang fl">
                                <p class="delsingle"><a href="#">删除</a></p>
                                <p><a href="#">移入收藏夹</a></p>
                            </div>
                        </li>`
                }).join("");
                $ul.empty().append(res);  
            }
            // $(".plDel").on("click",function(e){

            // })
            var allremove=document.querySelector(".plDel");
            allremove.onclick=function(e){
                var target=e.target || e.srcElement;
                console.log(target);
                if(target.className==="plDel"){
                    $.ajax({
                        type:'get',
                        url:'../api/cart_del.php',
                        data:{
                            empty:"empty"
                        },
                        success:function(data){
                            console.log(data);
                            var data=JSON.parse(data);
                            render(data);
                        }
                    })
                }
            }



            var lis=$ul.children();
          // 点击加减按钮，添加商品数量
            // var btnqty=document.querySelectorAll(".cart_input");
           
            var btnqty=document.querySelector(".cartlist");
            // console.log(qtys);
            // for(let j=0;j<btnqty.length;j++){
            btnqty.onclick=function(e){
                var target=e.target || e.srcElement;
                console.log(target);
                // 点击删除按钮，删除单个商品
                if(target.parentElement.className==='delsingle'){
                    var currentLi=target.parentElement.parentElement.parentElement;
                    console.log(currentLi);
                    var currentId=currentLi.getAttribute("date-guid");
                    $.ajax({
                        type:"get",
                        url:"../api/cart_del.php",
                        data:{
                            currentId:currentId,
                            remove:'remove'
                        },
                        success:function(data){
                            var data=JSON.parse(data);
                            render(data);
                        }

                    })
                }

                // 判断点击的是否为“-”，若是则qty--
                if(target.className==="jian"){
                    var currentLi=target.parentElement.parentElement;
                    var currentId=currentLi.getAttribute("date-guid");
                    for(let i=0;i<arr.length;i++){
                        if(arr[i].id===currentId){
                          
                            arr[i].qty--;
                            if(arr[i].qty<0){
                                return ;
                            }
                            $.ajax({
                                type:'get',
                                url:'../api/cart_del.php',
                                data:{
                                    currentId:currentId,
                                    qty:arr[i].qty
                                },
                                success:function(data){
                                    var data=JSON.parse(data);
                                    render(data);
                                }
                            })
                        }
                    }
                }
                
                if(target.className==="jia"){
                    var currentLi=target.parentElement.parentElement;
                    // console.log(currentLi);
                    var currentId=currentLi.getAttribute("date-guid");
                    // console.log(currentId);
                    for(let i=0;i<arr.length;i++){
                        if(arr[i].id===currentId){
                            console.log(arr[i]);
                            arr[i].qty++;
                            $.ajax({
                                type:'get',
                                url:'../api/cart_del.php',
                                data:{
                                    currentId:currentId,
                                    qty:arr[i].qty
                                },
                                success:function(data){
                                    var data=JSON.parse(data);
                                    render(data);
                                }
                            })
                        }
                    }
                }

                
            }
          
            
        }
    })
})
