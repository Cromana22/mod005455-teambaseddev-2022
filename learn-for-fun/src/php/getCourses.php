<?php
    require 'database.php';
    
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");

    $query = $connection->prepare("SELECT * FROM course"); 
    $query->execute();
    $rows = array();

    while($row = $query->fetch())
    {
        $rows[] = $row;
    }

    print json_encode($rows); //convert php data to json data
?>