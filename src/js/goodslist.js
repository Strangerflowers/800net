/* 
* @Author: Marte
* @Date:   2018-10-24 17:15:49
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-24 20:51:44
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
                var $res='';
                $.map($arr,function(item,idx){
                    return  $res+=`<li>
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
                $ul_list.append($res);
               
            }

               //点击价格按钮排序
                var priceBtn = document.getElementsByClassName("price")[0];
                
                //声明一个变量，告知当前是价格升序还是降序排名
                var upLogoP = true;
                priceBtn.onclick = function(){
                    console.log(upLogoP);
                    if(upLogoP){
                        var priu=$arr.sort(function(a,b){
                            return b.sale - a.sale;
                        });
                        
                        render(priu);
                        // downiconP.style.backgroundImage ="url(../images/downicon.png)" ;
                        // dataArr = dataArr2.slice(0);
                    }
                    else if(!upLogoP){
                        var pril=$arr.sort(function(a,b){
                            return a.sale- b.sale;
                        });
                        render(pril);
                        // downiconP.style.backgroundImage ="url(../images/upicon.png)" ;
                        // dataArr = dataArr2.slice(0);
                    }
                    upLogoP = !upLogoP;
                    // console.log(dataArr)
                }

                //点击日期按钮排序
                var dateBtn = document.getElementsByClassName("newest")[0];
                
                //声明一个变量，告知当前日期是升序还是降序排名
                var upLogoD = true;
                dateBtn.onclick = function(){
                    if(upLogoD){
                        $arr.sort(function(a,b){
                        return new Date(a.time).getTime() - new Date(b.time).getTime();
                        });
                        // goodslistfn();
                        // downiconD.style.backgroundImage ="url(../images/downicon.png)" ;
                        // dataArr = dataArr2.slice(0);
                    }
                    else if(!upLogoD){
                        $arr.sort(function(a,b){
                        return new Date(b.time).getTime() - new Date(a.time).getTime();
                        });
                        // goodslistfn();
                        render()
                        // downiconD.style.backgroundImage ="url(../images/upicon.png)" ;
                        // dataArr = dataArr2.slice(0);
                    }
                    upLogoD = !upLogoD;
                // console.log(dataArr);


                }



        }
    })
    



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