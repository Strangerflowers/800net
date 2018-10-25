<?php
/**
 * @Author: Marte
 * @Date:   2018-10-25 19:07:40
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-10-25 20:50:11
 */

 include 'connect.php';

    // var_dump($conn);
    $currentId= isset($_GET['currentId']) ? $_GET['currentId']:null;
    $remove= isset($_GET['remove']) ? $_GET['remove']:null;
    $qty= isset($_GET['qty']) ? $_GET['qty']:null;
    $empty= isset($_GET['empty']) ? $_GET['empty']:null;
    // var_dump($currentId);
    // 插入数据库
    
    if($remove){
        $sql = "delete from cart where id='$currentId'";
        //执行sql语句
        $result=$con->query($sql);

        $sql = "select * from cart";

        $result=$con->query($sql);

        $res = $result->fetch_all(MYSQLI_ASSOC);

        echo json_encode($res,JSON_UNESCAPED_UNICODE);
    }else if($qty){
        $sql = "update cart set qty='$qty' where id='$currentId'";
        //执行sql语句
        $result=$con->query($sql);

        $sql = "select * from cart";

        $result=$con->query($sql);

        $res = $result->fetch_all(MYSQLI_ASSOC);

        echo json_encode($res,JSON_UNESCAPED_UNICODE);
    }else if($empty){
        $sql = "delete from cart";
        //执行sql语句
        $result=$con->query($sql);

        $sql = "select * from cart";

        $result=$con->query($sql);

        $res = $result->fetch_all(MYSQLI_ASSOC);

        echo json_encode($res,JSON_UNESCAPED_UNICODE);
    }
    
  
    

?>