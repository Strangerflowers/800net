/* 
* @Author: Marte
* @Date:   2018-10-23 20:02:09
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-23 21:46:37
*/

jQuery(function($){
    var $uname=$(".username");
    var $password=$(".password");
    var $confirm=$(".confirm");
    var $getCode=$(".getCode");
    var $getP=$(".getPhone");
    var $btn=$(".btn");
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
                console.log(data);
            }
        })
    })
    
})