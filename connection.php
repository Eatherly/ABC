<?php
$connection = mysqli_connect('eatherly.mysql.tools', 'eatherly_abc', 'k8atapu4', 'eatherly_abc');
mysqli_set_charset($connection, 'utf8');
if (mysqli_connect_errno())
    echo mysqli_connect_error();
?>