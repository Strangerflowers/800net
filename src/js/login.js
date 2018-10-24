/* 
* @Author: Marte
* @Date:   2018-10-24 13:27:27
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-24 16:26:30
*/

/* 
* @Author: Marte
* @Date:   2018-10-23 20:02:09
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-24 13:23:05
*/

jQuery(function($){
    var $uname=$(".username");
    var $password=$(".passwords");
    var $hcode=$(".hcode");
    var $btns=$(".btns");
    var $icode=$(".icode");
    var isok=false;
    $btns.on("click",function(){
       
        var _username=$uname.val();
        var _password=$password.val();
        var _icode=$icode.val();
        var _hcode=$hcode.html();
        if(_hcode != _icode){
            console.log('_hcode', _hcode)
            console.log('_icode', _icode)
            alert('验证码有误');
            return false;
        }

        $.ajax({
            type:"post",
            url:"../api/login.php",
            data:{
                "username":_username,
                "password":_password
            },
            success:function(data){
                console.log(data);
               if(data==='success'){

                    location.href="../index.html";
                }else if(data==='fail'){
                    alert("账号或密码有误");
                }
            }
        })
        
    })

    $hcode.on("click",function(event){
        randomCode();
        event.preventDefault();
    })
    var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
     // 封装函数生成随机数字或字母
    function randomCode(){
        // var span=document.querySelector('span');
        var content = '';
        for(var i=0;i<4;i++){
          var index =parseInt(Math.random()*str.length)
          content +=str[index];
        }
        $hcode.html(content).css("background",randomColor16()) ;
    }  
    
    randomCode();


    $(".more").on("click",function(event){
        $(".h_account").toggle();
        event.preventDefault();
    
    })



    // 验证用户名是否存在
    $uname.blur(function(){
        var _username=$uname.val();

        console.log(_username);
        $.ajax({
            type:"get",
            url:"../api/register.php",
            data:{
                username:_username
                // password:_password
            },
            success:function(data){
                var res=JSON.parse(data);
                if(res=='no'){
                    isok=false;
                }
                else if(res=='yes'){
                    alert(".您还未注册，请前往注册页面注册");
                    isok=true;
                   
                }
            }
        })
    })
    
})