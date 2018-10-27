/* 
* @Author: Marte
* @Date:   2018-10-25 15:06:11
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-27 18:08:56
*/
jQuery(function($){
    var $list=$(".list");
    var $ul=$(".cartlist");
    var $total_price=$(".total_price");
    var sum=0;
    var c_qty=$(".c_qty");
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
                            <div class="duoxuan2 fl"><input type="checkbox" class="checkbox" /></div>
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
                            <div class="sale zongjia fl">￥：<span class="totalAll"> ${total}</span></div>
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
            // 清空购物车
            var allremove=document.querySelector(".removeAll");
            allremove.onclick=function(e){
                if(confirm("您确定要清空购物车吗？")){
                    var target=e.target || e.srcElement;
                // console.log(target);
                    if(target.className==="removeAll"){
                        $.ajax({
                            type:'get',
                            url:'../api/cart_del.php',
                            data:{
                                empty:"empty"
                            },
                            success:function(data){
                                // console.log(data);
                                var data=JSON.parse(data);
                                render(data);
                            }
                        })
                    }
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
                // console.log(target);
                // 点击删除按钮，删除单个商品
                if(target.parentElement.className==='delsingle'){
                    var currentLi=target.parentElement.parentElement.parentElement;
                    // console.log(currentLi);
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
                    console.log(currentLi);
                    var currentId=currentLi.getAttribute("date-guid");
                    let ci_qty = currentLi.querySelector('.ci_qty').value;
                    ci_qty--;
                   
                            $.ajax({
                                type:'get',
                                url:'../api/cart_del.php',
                                data:{
                                    currentId:currentId,
                                    qty: ci_qty
                                },
                                success:function(data){
                                    var _data = JSON.parse(data);
                                    render(_data);
                                }
                            })
                   
                }
                
                if(target.className==="jia"){
                    var currentLi=target.parentElement.parentElement;
                    console.log(currentLi);
                    var currentId=currentLi.getAttribute("date-guid");
                    let ci_qty = currentLi.querySelector('.ci_qty').value;
                    ci_qty++;
                    
                            $.ajax({
                                type:'get',
                                url:'../api/cart_del.php',
                                data:{
                                    currentId:currentId,
                                    qty: ci_qty
                                },
                                success:function(data){
                                    var data=JSON.parse(data);
                                    render(data);
                                }
                            })
                  
                }

                
            }

            // 多选框的操作
            var $all=$(".all");
            var $totalAll=$(".totalAll");
            var $sCheck=$ul.find(".checkbox");
            var $delAll=$(".delAll");
            // console.log($sCheck);
            var $btn=$(".cart_content");
            console.log(999);

            $all.on("click",function(){
               
                $sCheck.prop("checked",this.checked).parents("li").toggleClass('selected');
                $delAll.prop("checked",this.checked);
                $sCheck.each((idx,item)=>{
                    console.log(item);
                    if(item.checked){
                        sum += $(item).parents("li").find('.totalAll').html()*1;
                        $sCheck.prop("checked",this.checked)
                        console.log(sum);
                    }else{
                        sum -= $(item).parents("li").find('.totalAll').html()*1;
                    }
                    
                })
                
                $total_price.html(sum);
                console.log($sCheck.parents("li").attr("date-guid"));

            })
            // 点击单个li，高亮当前li
            $btn.on("click","li",function(){
                $(this).toggleClass('selected');
                $(this).find(":checkbox").prop("checked",$(this).hasClass('selected'));
              
                console.log($(this).find(":checkbox"));
                    if($(this).find(":checkbox")[0].checked){
                        sum += $(this).find('.totalAll').html()*1;
                        console.log(sum);
                    }else{
                        sum -= $(this).find('.totalAll').html()*1;
                    }
                    
                $total_price.html(sum);
                changeAllChecked();

            })
            // 5.封装函数，判断$sCheck的元素个数与被选中的多选框的个数，如果一致，总选框状态true。如果不一致，就为false
            function changeAllChecked(){
                var len = $sCheck.length;
                var checkedlen = $sCheck.filter(":checked").length;
                if(len == checkedlen){
                    $all.prop("checked",true);
                    $delAll.prop("checked",true);
                }else{
                    $all.prop("checked",false);
                    $delAll.prop("checked",false);
                }
            }


           // 删除多个
        $('.plremove').click(()=>{
            if(confirm('您确定要删除选中的商品吗？')){
                $sCheck.each((idx,item)=>{
                    if(item.checked){
                        var id = $(item).parents("li").attr('date-guid')*1;
                      
                        $.get('../api/cart_del.php',{id:id},function(data){
                            
                        })
                        $(item).parents('li').remove();
                    }
                    
                })
            }
        })
            
        }







    })

     var $home_qty=$(".home_qty");
     var $c_qty=$(".c_qty");
        $.ajax({
            type:"get",
            url:"../api/cart.php",
            data:{

            },
            success:function(data){
                var res=JSON.parse(data);
                console.log(res.length);
                $home_qty.html(res.length);
                $c_qty.html(res.length);
            }
        })
    


    
})
