<?php
/**
 * @Author: Marte
 * @Date:   2018-10-25 11:54:44
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-10-25 15:02:42
 */
 include 'connect.php';

    // var_dump($conn);
    $currentId= isset($_GET['currentId']) ? $_GET['currentId']:null;
    $Img= isset($_GET['Img']) ? $_GET['Img']:null;
    $username= isset($_GET['username']) ? $_GET['username']:null;
    $color= isset($_GET['color']) ? $_GET['color']:null;
    $size= isset($_GET['size']) ? $_GET['size']:null;
    $qty= isset($_GET['qty']) ? $_GET['qty']:null;
    $price= isset($_GET['price']) ? $_GET['price']:null;
    $sale= isset($_GET['sale']) ? $_GET['sale']:null;
    // $total= isset($_GET['total']) ? $_GET['total']:null;
    // var_dump($currentId);
    // 插入数据库
   $sql = "insert into cart(id,name,imgurl,color,size,qty,price,sale) values('$currentId','$username','$Img','$color','$size','$qty',' $price','$sale')";
    //执行sql语句
    $result=$con->query($sql);

    // var_dump($result);
    if($result->num_rows>0){
       echo $str=json_encode('fail',JSON_UNESCAPED_UNICODE);

    }else{
        echo $str=json_encode('success',JSON_UNESCAPED_UNICODE);
    }

?>