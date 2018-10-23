<?php
/**
 * @Author: Marte
 * @Date:   2018-10-23 21:34:43
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-10-23 21:35:22
 */
include 'connect.php';

    // var_dump($conn);
    $username= isset($_GET['username'])?$_GET['username']:null;

    // 查找数据库中是否存在同名用户名
    $sql = "select * from register where name='$username'";

    //执行sql语句
    $result=$conn->query($sql);

    if($result->num_rows>0){

        echo "no";

    }else{
        echo "yes";
    }
?>