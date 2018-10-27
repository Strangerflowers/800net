/* 
* @Author: Marte
* @Date:   2018-10-24 17:15:49
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-27 18:13:14
*/


jQuery(function($){
    var $ul_list=$(".ul_list");
    var arr;
    // var render;
    var pageNo=1;
    var qty=12;
    $.ajax({
        type:"get",
        url:"../api/good_page.php",
        data:{
            pageNo:pageNo,
            qty:qty
        },
        success:function(data){
            arr=JSON.parse(data);
            
             function render($arr){
                // console.log($arr)
                var $res='';
                $.map($arr.data,function(item,idx){
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
                // 创建分页
                var page=document.querySelector(".page");
                // 每次创建之前都要清空：
                page.innerHTML='';
                var pagelen=Math.ceil($arr.len/$arr.qty);
                // console.log(pagelen);
                for(let i=0;i<pagelen;i++){
                    var span=document.createElement('span');
                    span.innerText=i+1;
                    if(i===$arr.pageNo-1){
                        console.log($arr.pageNo-1);
                        span.className='active';
                        // console.log(i);
                    }
                    page.appendChild(span);
                }
            }
            render(arr);

            var page=document.querySelector(".page");
            page.onclick=function(e){
                if(e.target.tagName.toLowerCase()==="span"){
                    pageNo = e.target.innerHTML;
                    // console.log(pageNo);
                    $.ajax({
                        type:"get",
                        url:"../api/good_page.php",
                        data:{
                            pageNo:pageNo,
                            qty:qty
                        },
                        success:function(data){
                            $arr=JSON.parse(data);
                            render($arr);
                        }
                    })
                }
                
            }
        }


    })
            var $home_qty=$(".home_qty");
            $.ajax({
                type:"get",
                url:"../api/cart.php",
                data:{

                },
                success:function(data){
                    var res=JSON.parse(data);
                    console.log(res.length);
                    $home_qty.html(res.length);
                }
            })

            var show = true;
            $(".price").on("click",function(){

                    if(show){
                        $.ajax({
                            type:"get",
                            url:"../api/gorder.php",
                            data:{
                                price:show
                            },
                            success:function(data){
                                
                                var res=JSON.parse(data).slice(0,12);
                                // console.log(res);
                                render(res);
                                function render($arr){
                                    // console.log($arr)
                                    var $res='';
                                    $res=$.map($arr,function(item,idx){
                                        return  `<li date-id="${item.id}">
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
                            }
                        })
                    }else if(!show){
                        $.ajax({
                            type:"get",
                            url:"../api/gorder.php",
                            data:{
                                price:show
                            },
                            success:function(data){
                                console.log(888);
                                // var res=JSON.parse(data);
                                var res=JSON.parse(data).slice(0,12);
                                render(res);
                                function render($arr){
                                    var $res='';
                                    $res=$.map($arr,function(item,idx){
                                        return `<li date-id="${item.id}">
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
                            }
                        })
                    }
                   
                    show = !show;
            })



            var data = true;
            $(".newest").on("click",function(){

                    if(data){
                        $.ajax({
                            type:"get",
                            url:"../api/gorder.php",
                            data:{
                                data:data
                            },
                            success:function(data){
                                
                                var res=JSON.parse(data).slice(0,12);
                                console.log(res);
                                render(res);
                                function render($arr){
                                    // console.log($arr)
                                    var $res='';
                                    $res=$.map($arr,function(item,idx){
                                        return  `<li date-id="${item.id}">
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
                            }
                        })
                    }else if(!data){
                        $.ajax({
                            type:"get",
                            url:"../api/gorder.php",
                            data:{
                                data:data
                            },
                            success:function(data){
                                console.log(888);
                                // var res=JSON.parse(data);
                                var res=JSON.parse(data).slice(0,12);
                                render(res);
                                function render($arr){
                                    var $res='';
                                    $res=$.map($arr,function(item,idx){
                                        return `<li date-id="${item.id}">
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
                            }
                        })
                    }
                    data = !data;
            })

            
             var xl = true;
            $(".good_sale").on("click",function(){

                    if(xl){
                        $.ajax({
                            type:"get",
                            url:"../api/gorder.php",
                            data:{
                                xl:xl
                            },
                            success:function(data){
                                
                                var res=JSON.parse(data).slice(0,12);
                                console.log(res);
                                render(res);
                                function render($arr){
                                    // console.log($arr)
                                    var $res='';
                                    $res=$.map($arr,function(item,idx){
                                        return  `<li date-id="${item.id}">
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
                            }
                        })
                    }else if(!xl){
                        $.ajax({
                            type:"get",
                            url:"../api/gorder.php",
                            data:{
                                xl:xl
                            },
                            success:function(data){
                                console.log(888);
                                // var res=JSON.parse(data);
                                var res=JSON.parse(data).slice(0,12);
                                render(res);
                                function render($arr){
                                    var $res='';
                                    $res=$.map($arr,function(item,idx){
                                        return `<li date-id="${item.id}">
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
                            }
                        })
                    }
                    xl = !xl;
            })













    
    
                // 点击价格按钮排序
                // var priceBtn = document.getElementsByClassName("price")[0];
                // var price;
                // //声明一个变量，告知当前是价格升序还是降序排名
                // var upLogoP = true;
                // priceBtn.onclick = function(){
                //     $.ajax({
                //         type:"get",
                //         url:"../api/gorder.php",
                //         data:{
                //             price:upLogoP
                //         },
                //         success:function(data){
                //             var res=JSON.parse(data);
                //             render(res);




                //             // })
    
                //         }
                //     })
                //     // if(upLogoP){
                //     //     var priu=$arr.sort(function(a,b){
                //     //         return b.sale - a.sale;
                //     //     });
                //     //     // console.log('priu', priu)
                //     //     render(priu);
                //     // }
                //     // else if(!upLogoP){
                //     //     var pril=$arr.sort(function(a,b){
                //     //         return a.sale- b.sale;
                //     //     });
                //     //     render(pril);
                //     // }
                //     // upLogoP = !upLogoP;
                // }
                // //点击最新按钮排序（按时间排序）
                // var dateBtn = document.getElementsByClassName("newest")[0];
                
                // //声明一个变量，告知当前日期是升序还是降序排名
                // var upLogoD = true;
                // dateBtn.onclick = function(){
                //     if(upLogoD){
                //         var dateup=$arr.sort(function(a,b){
                //         return new Date(a.reg_time).getTime() - new Date(b.reg_time).getTime();
                //         });
                //         render(dateup);
                       
                //     }
                //     else if(!upLogoD){
                //         var datel=$arr.sort(function(a,b){
                //         return new Date(b.reg_time).getTime() - new Date(a.reg_time).getTime();
                //         });
                       
                //         render(datel);
                       
                //     }
                //     upLogoD = !upLogoD;
                // }



     // $.ajax({
     //        type:"get",
     //        url:"../api/goodslist.php",
     //        data:{},
     //        success:function(data){
     //            $arr=JSON.parse(data);
     //            //点击价格按钮排序
     //            var priceBtn = document.getElementsByClassName("price")[0];
     //            //声明一个变量，告知当前是价格升序还是降序排名
     //            var upLogoP = true;
     //            priceBtn.onclick = function(){
     //                // console.log(upLogoP);
     //                if(upLogoP){
     //                    var priu=$arr.sort(function(a,b){
     //                        return b.sale - a.sale;
     //                    });
     //                    // console.log('priu', priu)
     //                    render(priu);
     //                }
     //                else if(!upLogoP){
     //                    var pril=$arr.sort(function(a,b){
     //                        return a.sale- b.sale;
     //                    });
     //                    render(pril);
     //                }
     //                upLogoP = !upLogoP;
     //            }
     //            //点击最新按钮排序（按时间排序）
     //            var dateBtn = document.getElementsByClassName("newest")[0];
                
     //            //声明一个变量，告知当前日期是升序还是降序排名
     //            var upLogoD = true;
     //            dateBtn.onclick = function(){
     //                if(upLogoD){
     //                    var dateup=$arr.sort(function(a,b){
     //                    return new Date(a.reg_time).getTime() - new Date(b.reg_time).getTime();
     //                    });
     //                    render(dateup);
                       
     //                }
     //                else if(!upLogoD){
     //                    var datel=$arr.sort(function(a,b){
     //                    return new Date(b.reg_time).getTime() - new Date(a.reg_time).getTime();
     //                    });
                       
     //                    render(datel);
                       
     //                }
     //                upLogoD = !upLogoD;
     //            }

     //        }
     //    })
   
    
    

    

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