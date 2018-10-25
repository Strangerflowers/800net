<?php
/**
 * @Author: Marte
 * @Date:   2018-10-25 15:06:39
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-10-25 15:13:07
 */
include 'connect.php';
   
$sql = "SELECT * FROM cart"; 
$result = mysqli_query($con,$sql); 
if (!$result) {
  printf("Error: %s\n", mysqli_error($con));
  exit();
}
  
$jarr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
  $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小 
  for($i=0;$i<$count;$i++){ 
    unset($rows[$i]);//删除冗余数据 
  }
  array_push($jarr,$rows);
}
echo $str=json_encode($jarr,JSON_UNESCAPED_UNICODE);
// var_dump($str);
//将数组进行json编码

?>