/* 
* @Author: Marte
* @Date:   2018-10-23 20:02:09
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-26 09:13:07
*/

jQuery(function($){
    var $uname=$(".username");
    var $usname=$(".uname");
    var $password=$(".passwords");
    var $confirm=$(".confirms");
    var $getCode=$(".getCode");
    var $getP=$(".getPhone");
    var $btn=$(".btn");
    var $btns=$(".btns");
    var isok=false;
    var $icode=$(".icode");
    var $ipcode=$(".ipcode");
    var checkbox=$(".check");
    // 点击生成随机验证码
    $getCode.on("click",function(event){
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
        $getCode.html(content).css("background",randomColor16()) ;
    }  
    
    randomCode();
  

    $btns.on("click",function(){
        if(!isok){
            return ;
        }
        var _username=$uname.val();
        var _password=$password.val();
        var _confirm=$confirm.val();
        var _icode=$icode.val();
        var _getCode=$getCode.html();
        var _ipcode=$ipcode.val();


        if(!/^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(_username)){
        alert('邮箱格式不合法');
        return false;
         }

        if(!/^[a-zA-Z]\S{5,19}$/.test(_password)){
            alert('密码不能有空格');
            return false;  
        }
         
       
        if(_confirm != _password){
            alert('两次输入密码不一致');
            return false;
        }
        if(_getCode != _icode){
            console.log('_getCode', _getCode)
            console.log('_icode', _icode)
            alert('验证码有误');
            return false;
        }

        //短信验证码
         if(!/^\S{4}$/.test(_ipcode)){
            alert('短信验证码有误');
            return false;  
        }
      
         if(!checkbox[0].checked){                      
            alert('请勾选协议');
            return ;
        }

      
           
        $.ajax({
            type:"post",
            url:"../api/reg.php",
            data:{
                "username":_username,
                "password":_password
            },
            success:function(data){
                // var res=JSON.parse(data);
                location.href="../login.html";
                
            }
        })
        

    })

                






    $(".more").on("click",function(event){
        $(".h_account").toggle();
        event.preventDefault();
    
    })

    // 验证用户名是否存在
    $uname.blur(function(){
        var _username=$uname.val();
        var _passowrod=$password.val();

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
                    console.log(111);
                    $(".err").show();
                    $uname.css("border","1px solid #f00");
                    return ;
                }
                else if(res=='yes'){
                    console.log(888);
                    $uname.css("border","1px solid #58bc58");
                    $(".err").hide();
                    isok=true
                }
            }
        })
    })
    
})