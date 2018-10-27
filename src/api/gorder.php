<?php
/**
 * @Author: Marte
 * @Date:   2018-10-26 10:19:34
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-10-27 17:05:39
 */

include 'connect.php';


$price=isset($_GET["price"]) ? $_GET["price"] : "";
$data=isset($_GET["data"]) ? $_GET["data"] : "";
$xl=isset($_GET["xl"]) ? $_GET["xl"] : "";


// $sql = 'select * from goodslist';

// var_dump($price);
if($price==="true"){

    $sql = 'select * from goodslist order by sale desc';
    

}else if($price=='false'){
    $sql = 'select * from goodslist order by sale asc';
    
}
if($data=="true"){

    $sql = 'select * from goodslist order by reg_time desc';

}else if($data=='false'){

    $sql = 'select * from goodslist order by reg_time asc';

}
if($xl=="true"){

    $sql = 'select * from goodslist order by s_volum desc';

}else if($xl=='false'){

    $sql = 'select * from goodslist order by s_volum asc';

}
    // var_dump($sql);
    $result=$con->query($sql);
     
    $res = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($res,JSON_UNESCAPED_UNICODE);






    
?>