<?php
    require 'database.php';
    
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");


    $query1 = "SELECT * FROM user WHERE userID = 2";
    $query2 = "SELECT * FROM subscription WHERE userID =2";
    $query3 = "SELECT * FROM paymentdetails WHERE userID =2"

    $rows =[];
    for(int $i=0;$i<3;$i++)
    {
        $query = $connection->prepare($query+$i); 
        $query->execute();
        $rows = array();

    while($row = $query->fetch())
    {
        $rows[] = $row;
    }
    }

    print json_encode($rows); //convert php data to json data
?>