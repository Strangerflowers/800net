<?php
/**
 * @Author: Marte
 * @Date:   2018-10-24 19:21:12
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-10-24 20:06:07
 */
include 'connect.php';

    // var_dump($conn);
  

    // 查找数据库中是否存在同名用户名
    // $sql = "select * from register where name='$username'";
    $sql = 'select * from goodslist where id>0 order by sale desc';
    //执行sql语句
    $result=$con->query($sql);
    // $row = $result->fetch_all(MYSQLI_ASSOC);
    var_dump($result);
    // if($result->num_rows>0){

    //     echo $str=json_encode('no',JSON_UNESCAPED_UNICODE);

    // }else{
    //     echo $str=json_encode('yes',JSON_UNESCAPED_UNICODE);
    // }
?>