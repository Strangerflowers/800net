<?php
/**
 * @Author: Marte
 * @Date:   2018-10-25 09:31:34
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-10-25 14:12:08
 */


    include 'connect.php';

   

    $currentId=isset($_GET["currentId"]) ? $_GET["currentId"] : "";

    // $sql='select * from goodslist where id = "$currentId"'; 
    // var_dump($currentId);
    $sql='select * from goodslist';   
    $result = $con->query($sql);
    $res = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($result);
    $data='';
    for($i=0;$i<count($res);$i++){
        if($res[$i]["id"]===$currentId){
            $data=$res[$i];
        }
    }
    // var_dump($data);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    
    $result->close();
    $con->close();



?>