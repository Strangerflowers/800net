<?php
/**
 * @Author: Marte
 * @Date:   2018-10-23 21:35:35
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-10-23 21:36:10
 */
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "800net"; 
  
// 创建连接 
$con =mysqli_connect($servername, $username, $password, $dbname);

//中文问号乱码加这个；
$con->set_charset('utf8');  
// 检测连接 
  
?>