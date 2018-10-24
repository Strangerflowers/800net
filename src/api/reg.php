<?php
/**
 * @Author: Marte
 * @Date:   2018-10-24 10:12:56
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-10-24 11:41:34
 */

 include 'connect.php';

    // var_dump($conn);
    $username= isset($_POST['username']) ? $_POST['username']:null;
    $password= isset($_POST['password']) ? $_POST['password']:null;
    // var_dump($username,$password);
    // 插入数据库
   $sql = "insert into register(name,passwodr) values('$username','$password')";
    //执行sql语句
    $result=$con->query($sql);
    // var_dump($result);
    if($result->num_rows>0){
        echo "fail";

    }else{
        echo "success";
    }

?>