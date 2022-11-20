<?php
    require 'database.php';
    
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");

    $trp = mysqli_query($conn, "SELECT * from course");
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    print json_encode($rows); //convert php data to json data
?>