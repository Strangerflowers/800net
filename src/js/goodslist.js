/* 
* @Author: Marte
* @Date:   2018-10-24 17:15:49
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-28 14:43:13
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
    
    // 价格排序：
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
                            // console.log(data);
                        var res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                        // console.log((pageNo-1)*qty,pageNo*qty);
                        
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
                            var page=document.querySelector(".page");
                            var spans=page.children;
                                page.onclick=function(e){
                                    if(e.target.tagName.toLowerCase()==="span"){
                                        pageNo = e.target.innerHTML;
                                        for(let i=0;i<spans.length;i++){
                                        spans[i].className='';
                                        }
                                        e.target.className='active';
                                        res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                                            render(res);
                                        console.log(pageNo);
                                       
                                    }
                                    
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
                        // console.log(data);
                    var res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                    // console.log((pageNo-1)*qty,pageNo*qty);
                    
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
                        var page=document.querySelector(".page");
                        var spans=page.children;
                            page.onclick=function(e){
                                if(e.target.tagName.toLowerCase()==="span"){
                                    pageNo = e.target.innerHTML;
                                    for(let i=0;i<spans.length;i++){
                                    spans[i].className='';
                                    }
                                    e.target.className='active';
                                    res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                                        render(res);
                                    console.log(pageNo);
                                   
                                }
                                
                            }
                       
                    }
                })
            }
           
            show = !show;
    })


    // 时间排序
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
                            // console.log(data);
                        var res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                        // console.log((pageNo-1)*qty,pageNo*qty);
                        
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
                            var page=document.querySelector(".page");
                            var spans=page.children;
                                page.onclick=function(e){
                                    if(e.target.tagName.toLowerCase()==="span"){
                                        pageNo = e.target.innerHTML;
                                        for(let i=0;i<spans.length;i++){
                                        spans[i].className='';
                                        }
                                        e.target.className='active';
                                        res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                                            render(res);
                                        console.log(pageNo);
                                       
                                    }
                                    
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
                        // console.log(data);
                    var res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                    // console.log((pageNo-1)*qty,pageNo*qty);
                    
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
                        var page=document.querySelector(".page");
                        var spans=page.children;
                            page.onclick=function(e){
                                if(e.target.tagName.toLowerCase()==="span"){
                                    pageNo = e.target.innerHTML;
                                    for(let i=0;i<spans.length;i++){
                                    spans[i].className='';
                                    }
                                    e.target.className='active';
                                    res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                                        render(res);
                                    console.log(pageNo);
                                   
                                }
                                
                            }
                       
                    }
                })
            }
           
            data = !data;
    })



    // 销量排序
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
                            // console.log(data);
                        var res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                        // console.log((pageNo-1)*qty,pageNo*qty);
                        
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
                            var page=document.querySelector(".page");
                            var spans=page.children;
                                page.onclick=function(e){
                                    if(e.target.tagName.toLowerCase()==="span"){
                                        pageNo = e.target.innerHTML;
                                        for(let i=0;i<spans.length;i++){
                                        spans[i].className='';
                                        }
                                        e.target.className='active';
                                        res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                                            render(res);
                                        console.log(pageNo);
                                       
                                    }
                                    
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
                        // console.log(data);
                    var res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                    // console.log((pageNo-1)*qty,pageNo*qty);
                    
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
                        var page=document.querySelector(".page");
                        var spans=page.children;
                            page.onclick=function(e){
                                if(e.target.tagName.toLowerCase()==="span"){
                                    pageNo = e.target.innerHTML;
                                    for(let i=0;i<spans.length;i++){
                                    spans[i].className='';
                                    }
                                    e.target.className='active';
                                    res=JSON.parse(data).slice((pageNo-1)*qty,(pageNo)*qty);
                                        render(res);
                                    console.log(pageNo);
                                   
                                }
                                
                            }
                       
                    }
                })
            }
           
            xl = !xl;
    })
   
    // 点击商品，找到当前被点击的商品的id，发起请求，响应后将id传给详情页：
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


    var toTop = document.querySelector('.toTop');
        // 点击返回顶部
        toTop.onclick = function () {
            var timer = setInterval(function () {
                var speed = Math.ceil(window.scrollY / 5);
                scrollBy(0, -speed);
                if (window.scrollY <= 0) {
                    clearInterval(timer);
                }
            }, 30)
        }


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

})