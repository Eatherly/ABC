<?php
include_once "connection.php";
$int = (int)$_POST[mark];

$query = "UPDATE `goods` SET `voices_bal` = `voices_bal`+".$int." WHERE `name`='".$_POST[product]."';";
$query2 ="UPDATE `goods` SET `voices_count` = `voices_count`+1 WHERE `name`='".$_POST[product]."';";
$result = mysqli_query($connection, $query);
$result2 = mysqli_query($connection, $query2);
$rows = array();

 echo json_encode($int);
?>