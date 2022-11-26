<?php
    require 'database.php';
    
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");

    $courseId = $_GET['course'];

    $query = $connection->prepare("SELECT * FROM course WHERE courseId = '" .$courseId. "'"); 
    $query->execute();
    $rows = array();

    while($row = $query->fetch())
    {
        $rows[] = $row;
    }

    print json_encode($rows); //convert php data to json data
?>