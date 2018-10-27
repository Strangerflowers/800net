<?php
/**
 * @Author: Marte
 * @Date:   2018-10-26 10:19:34
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-10-27 17:08:40
 */



include 'connect.php';

$pageNo=isset($_GET["pageNo"]) ? $_GET["pageNo"] : "";
$qty=isset($_GET["qty"]) ? $_GET["qty"] : "";


$sql='select * from goodslist';   
$result = $con->query($sql);
$res = $result->fetch_all(MYSQLI_ASSOC);
$len =count($res);
$dataArr=array_slice($res,($pageNo-1)*$qty,$qty);
    // 数据格式化
    $resArr = array(
        "data" => $dataArr,
        "len" => $len,
        "pageNo" => $pageNo,
        "qty" => $qty
        );

    echo json_encode($resArr,JSON_UNESCAPED_UNICODE);



?>