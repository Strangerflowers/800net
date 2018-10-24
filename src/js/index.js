/* 
* @Author: Marte
* @Date:   2018-10-23 14:17:27
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-24 17:14:40
*/

document.addEventListener('DOMContentLoaded',()=>{
            
            let banner = document.getElementsByClassName('banner_pic')[0];
            let ul = banner.children[0];

            let index = 0;
            ul.appendChild(ul.children[0].cloneNode(true));

            let len = ul.children.length;

            // 设置ul宽度，实现水平排列效果
            ul.style.width = banner.clientWidth * len + 'px';

            // 添加分页
            let page = document.createElement('div');
            page.className = 'page';
            for(let i=0;i<len-1;i++){
                let span = document.createElement('p');
                span.innerText = i+1;
                if(i===index){
                    span.className = 'active';
                }

                page.appendChild(span);
            }
            banner.appendChild(page);


            // 添加上一张、下一张按钮
            let btnNext = document.createElement('span');
            btnNext.className = 'btn-next';
            btnNext.innerHTML = '&gt;';

            let btnPrev = document.createElement('span');
            btnPrev.className = 'btn-prev';
            btnPrev.innerHTML = '&lt;';

            banner.appendChild(btnPrev);
            banner.appendChild(btnNext);


            let timer = setInterval(autoPlay,3000);


            // 鼠标移入移除
            banner.onmouseover = ()=>{
                clearInterval(timer);
            }

            banner.onmouseout = ()=>{
                timer = setInterval(autoPlay,3000);

            }

            banner.onclick = e=>{
                // 点击分页切换
                if(e.target.parentNode.className === 'page'){
                    // 修改index值为当前分页数字-1
                    index = e.target.innerText-1;

                    show();
                }

                // 上一张，下一张
                else if(e.target.className === 'btn-prev'){
                    index--;
                    show();
                }else if(e.target.className === 'btn-next'){
                    index++;
                    show();
                }
            }


            function autoPlay(){
                index++;

                show();
            }


            function show(){
                if(index>=len){
                    // 无缝滚动关键2：当滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1
                    ul.style.left = 0;
                    index = 1;
                }else if(index<0){
                    index = len-2;
                }

                animate(ul,{left:-index*banner.clientWidth});

                for(let i=0;i<len-1;i++){
                    page.children[i].className = ''
                }

                if(index===len-1){
                    page.children[0].className = 'active';
                }else{
                    page.children[index].className = 'active';
                    
                }
            }


           jQuery(function($){
            
            $.ajax({
                type:'get',
                url:'api/home.php',
                data:{
                    // qty:_qty,
                    // pageNo:_pageNo
                },
                // dataType:'jsonp',
               
                success:function(res){
                    // console.log(res);
                    $arr=JSON.parse(res);
                    console.log($arr);
                    $good=$(".home_good_list");
                    var $res='';
                    $.map($arr,function(item,idx){
                        return  $res+=` <li>
                                <a href="#">
                                    <img src="${item.imgurl}" alt="" \ />
                                </a>
                                <p><a href="#">${item.name}</a><span class="fr">剩余4天</span></p>
                                <div class="youhui">${item.discount} <span class="fr">收藏</span></div>
                            </li>`
                    }).join("");
                    $good.append($res);
                }
            })
        });

    // 头部吸顶
        window.onscroll=function(){
            var scrollY = window.scrollY;
            var tool=document.querySelector(".tool_content");
            var header=document.querySelector(".header");
            var xiding=document.querySelector(".xiding");
            var nav=document.querySelector(".nav");
            var banner=document.querySelector(".banner");
            var side=document.querySelector(".side_nav");

            if(scrollY>=(tool.offsetHeight+header.offsetHeight+nav.offsetHeight+banner.offsetHeight)){
                
                xiding.style.display="block";
                side.style.display="block";
             
            }else{
                
                xiding.style.display="none";
                side.style.display="none";
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


})
            