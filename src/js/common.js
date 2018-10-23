/* 
* @Author: Marte
* @Date:   2018-08-27 16:23:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-12 20:31:41
*/
/* 
* @Author: Marte
* @Date:   2018-08-27 16:23:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-13 17:21:33
*/


/**
 * [打印三角形*]
 * @param  {Number} min [最小值]
 * @param  {Number]} max [最大]
 * @return {Number}     [返回min到max间的随机整数]
 */
function triangle(n){
    for(var i=1;i<=n;i++){
        for(var j=1;j<=i;j++){
            document.write("*");
        }
        document.write('<br/>');
    }
}


function getCss(ele,attr){
    if(window.getComputedStyle){
        // 标准浏览器
        return getComputedStyle(ele)[attr]
    }else if(ele.currentStyle){
        // IE6,7,8
        return ele.currentStyle[attr]
    }else{
        // 内联样式
        return ele.style[attr];
    }
}


/**
 * [生成任意范围内的随机整数]
 * @param  {Number} min [最小值]
 * @param  {Number]} max [最大]
 * @return {Number}     [返回min到max间的随机整数]
 */
function randomNum(min,max){
    // 1.封装[a,b]的随机整数
    // 如果要拿到5-100的整数，随机数取值应该5-101。（5-101）===>(0,96)+5
    // Math.random()*96+5    =====>parseInt(Math.random()*(max-min+1) +min)
    var randnum=parseInt(Math.random()*(max-min+1))+min;

    return randnum;
}

/**
 * [求平方数]
 * @param  {Number} a [参数]

 * @return {Number}     [返回a*a的值]
 */

 function square(a){
   return a*a;
}
/**
 * [求立方数]
 * @param  {Number} a [参数]
 * @return {Number}     [返回a*a*a的值]
 */
function code(a){
    return a*a*a;
}


/**
 * [根据传进的参数得到最大值]
 * @param  {Number]} max [最大]
 * @return {Number}     [返回max最大值]
 */
function Max(){
    var max=arguments[0];
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    return max;
}

/**
 * [封装生成表格函数]
 * @param  {Number} row [行]
 * @param  {Number} col [列]
 * @return {String}       [生成表格]
 */

function createTable(row,col){
    var str='<table><tbody>';

    for(var i=0;i<row;i++){
        str+='<tr>';
        for(var j=0;j<col;j++){
            str+='<td>'+i+j+'</td>';
        }
        str+='</tr>';
    }
    str+='</tbody></table>';
    return str;
}



/**
 * [计算阶乘]
 * @param  {Number} n [阶乘数]
 * @return {Number}       [得出n阶乘的值]
 */
 function factorial(n){
                 var res=1;
                 for(var i=1;i<=n;i++){
                    res*=i;
                 }
                 return res;
           }

/**
 * [随机颜色]
 * @return {String} [返回rgb格式随机颜色]
 */
function randomColor(){
    var r=randomNum(0,255);
    var g=randomNum(0,255);
    var b=randomNum(0,255);
    return "rgb("+r+","+g+","+b+")";
}
/**
 * [十六进制的随机颜色]
 * @return {String} [返回rgb格式随机颜色]
 */
function randomColor16(){
    var str='0123456789abcdef';
    var arr=["#"];
        for(var i=0;i<6;i++){
            var idx=parseInt(Math.random()*16);//找到索引值，然后通过索引找到对应的值；
            var res=str.charAt(idx);
            arr.push(res);
        }
         return arr.join("");
}

// Cookie的操作
var cookie = {
    /**
     * [获取cookie]
     * @param  {String} name [cookie名]
     * @return {String}      [返回name对应的cookie值]
     */
    get:function(name){

         var cookies=document.cookie;
         var res='';
         cookies=cookies.split(';');
        for(var i=0;i<cookies.length;i++){
            var arr=cookies[i].split('=');
                if(arr[0]===name){
                    res=arr[1];
                }
        }
         
         return res;
    },
    remove:function(name, prop){
        var now=new Date();
        now.setDate(now.getDate()-1);
        // document.cookie=name+'=x;expires='+now.toUTCString();
        this.set(name,'x', prop ? {path: prop.path , expires:now} : {expires:now});

    },
    set:function(name,value,prop){
        var str=name+'='+value;
        if(prop===undefined){
            prop={};
        }
        // 有效期
        if(prop.expires){
            str+=';expires='+prop.expires.toUTCString();
        }
        // 路径
        if(prop.path){
            str+=';path='+prop.path
        }
        // 域名
        if(prop.domain){
            str+=';domain='+prop.domain
        }
        // 安全期
        if(prop.secure){
            str+=';secure';
        }
        // 写入cookie
        document.cookie=str;
    },
}

 /**
     * [将角度（deg）转换成弧度（rad）]
     * @param  {deg} name [deg]
     * @return {String}      [返回得到角度对应的rad]
     */

 function toRad(deg){
            return deg*Math.PI/180;
        }



 /**
     * [去重函数]
     * @param  {arr} name [数组]
     * @return {Array}      [返回已经去掉重复的元素的数组]
     */

 function norepeat(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<newArr.length;j++){
            if(arr[i]===newArr[j]){
                break;
            }
        }
        if(j===newArr.length){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/**
     * [cookie的设置，获取与删除]
     * @param  {name} cookie名 
     * @param {value} cookie值  
     * @param {date}  cookie过期时间  
     * @param {path} cookie路径 
     */


var Cookie={
    setCookie :function(name,value,date,path){
        var res=name+"="+value;
        if(date){
            res+= "; expires="+date;
        }
        if(path){
            res+="; path="+path;
        }
        document.cookie=res;
    },
    getCookie :function(name){
        var cookies=document.cookie;
        var cookiesArr=cookies.split("; ");
        for(var i=0;i<cookiesArr.length;i++){
            var arr=cookiesArr[i].split("=");
            if(arr[0]==name){
                return arr[1];
            }
        }
    },
    removeCookie :function(name,value,path){
        var d=new Date();
        d.setDate(d.getDate()-1);
        Cookie.setCookie(name,value,d.toUTCString(),path);
    },
    set:function(name,value,prop){
        var str=name+'='+value;
        if(prop===undefined){
            prop={};
        }
        // 有效期
        if(prop.expires){
            str+=';expires='+prop.expires.toUTCString();
        }
        // 路径
        if(prop.path){
            str+=';path='+prop.path
        }
        // 域名
        if(prop.domain){
            str+=';domain='+prop.domain
        }
        // 安全期
        if(prop.secure){
            str+=';secure';
        }
        // 写入cookie
        document.cookie=str;
    },
}



function animate(ele,opt,callback){
    // 记录属性数量
    var timerLen = 0;

    for(var attr in opt){
        // 每循环一个属性+1
        timerLen++;

        (function(attr){
            // 获取目标值
            var target = opt[attr];

            var timerName = attr + 'timer';

            // 避免抖动
            clearInterval(ele[timerName]);

            ele[timerName] = setInterval(function(){
                // 获取当前值
                // var current = getComputedStyle(ele)[attr];
                var current = getCss(ele,attr);//可能达到的值：-165px,200px,0.5,1,45deg,#1258bc

                // 提取单位
                var unit = current.match(/^([\-\d\.]+)([a-z]*)$/);//null

                if(!unit){
                    // 如果得到null,意味动画无法进行，直接退出
                    clearInterval(ele.timer);
                    return;
                }

                // 提取值和单位
                current = unit[1]*1;
                unit = unit[2];

                // 计算缓冲速度
                var speed = (target-current)/10;//0.6->1，-0.6->-1

                // speed不能为0
                speed = speed<0 ? Math.floor(speed) : Math.ceil(speed);

                // 针对opacity处理speed
                if(attr === 'opacity'){
                    speed = speed<0 ? -0.05 : 0.05;
                }

                current += speed;

                // 判断结束条件
                if(current === target){
                    clearInterval(ele[timerName]);

                    // 重置目标值
                    current = target;

                    // 每结束一个定时器，数量-1
                    timerLen--;

                    // 执行背景颜色改变
                    if(typeof callback === 'function' && timerLen===0){
                        callback();
                    }
                }

                // 设置样式
                ele.style[attr] = current + unit;
            },30);

        })(attr);
    }
}
