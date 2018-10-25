/* 
* @Author: Marte
* @Date:   2018-10-24 17:15:49
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-25 09:52:04
*/


jQuery(function($){
    var $ul_list=$(".ul_list");
    $.ajax({
        type:"get",
        url:"../api/goodslist.php",
        data:{

        },
        success:function(data){
            $arr=JSON.parse(data);
            render($arr);
            function render($arr){
                // console.log($arr)
                var $res='';
                $.map($arr,function(item,idx){
                    return  $res+=`<li date-id="${item.id}">
                                    <a href="#">
                                        <img src="${item.imgurl}" alt="" \ />
                                    </a>
                                    <p><a href="#">${item.name}</a></p>
                                    <div class="youhui">${item.sale}<span class="fr">剩余4天</span></div>
                                    <div class="shangp"><i></i><span class="baoyou">包邮</span><span class="fr">[详情]</span><span class="fr">收藏</span>
                                    <span class="find">找相似</span>
                                    </div>
                                </li>`
                }).join("");

                $ul_list.empty().append($res);
            }

               //点击价格按钮排序
                var priceBtn = document.getElementsByClassName("price")[0];
                
                //声明一个变量，告知当前是价格升序还是降序排名
                var upLogoP = true;
                priceBtn.onclick = function(){
                    // console.log(upLogoP);
                    if(upLogoP){
                        var priu=$arr.sort(function(a,b){
                            return b.sale - a.sale;
                        });
                        // console.log('priu', priu)
                        render(priu);
                    }
                    else if(!upLogoP){
                        var pril=$arr.sort(function(a,b){
                            return a.sale- b.sale;
                        });
                        render(pril);
                    }
                    upLogoP = !upLogoP;
                }

                //点击最新按钮排序（按时间排序）
                var dateBtn = document.getElementsByClassName("newest")[0];
                
                //声明一个变量，告知当前日期是升序还是降序排名
                var upLogoD = true;
                dateBtn.onclick = function(){
                    if(upLogoD){
                        var dateup=$arr.sort(function(a,b){
                        return new Date(a.reg_time).getTime() - new Date(b.reg_time).getTime();
                        });
                        render(dateup);
                       
                    }
                    else if(!upLogoD){
                        var datel=$arr.sort(function(a,b){
                        return new Date(b.reg_time).getTime() - new Date(a.reg_time).getTime();
                        });
                       
                        render(datel)
                       
                    }
                    upLogoD = !upLogoD;
               

                }



        }
    })
    
    

    // $ul_list.on("click","li",function(event){
    //     var target =event.target;
    //     console.log(target);
    //     if(target.parentElement.parentElement.tagName==="LI"){
    //         var currentId = target.parentElement.parentElement.getAttribute("date-id");
    //         $.ajax({
    //             type:"get",
    //             url:"../api/goodslist_url.php",
    //             data:{
    //                 currentId:currentId
    //             },
    //             success:function(data){
    //                 // var res=JSON.parse(data);
    //                 console.log(data);
    //             }
    //         })
    //     }

    // })

     var goodslist = document.querySelector(".ul_list");
     var status=[200,304];
                goodslist.onclick=function(e){
                    e = e|| window.event;
                    var target=e.target;
                    if(target.parentElement.parentElement.tagName==="LI"){
                        var currentId = target.parentElement.parentElement.getAttribute("date-id");
                        console.log(currentId);
                        var xhr_id=new XMLHttpRequest();
                        xhr_id.onload=function(){
                            if(status.indexOf(xhr_id.status) !=-1){
                                console.log(xhr_id.responseText);
                                location.href = "details.html?"+encodeURI(currentId);  
                            }

                        }
                        xhr_id.open('get','../api/goodslist_url.php?currentId='+currentId,true);
                        xhr_id.send();
   
                    }        
                }
    // var $volum=$(".good_sale");
    // $volum.on("click",function(e){
    //     var 
    //     $.ajax({
    //        type:"get",
    //        url:"../api/gorder.php",
    //        data:{

    //        },
    //        success:function(data){
    //            console.log(data);
    //        }
    //     })
    // })
})