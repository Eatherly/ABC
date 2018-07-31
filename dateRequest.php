<?php

include_once "connection.php";
$query = "SELECT * FROM `goods` ";
$result = mysqli_query($connection, $query);
$rows = array();
while ($r = mysqli_fetch_assoc($result)) {

  $rows[] = $r;
}
 echo json_encode($rows);
?>
