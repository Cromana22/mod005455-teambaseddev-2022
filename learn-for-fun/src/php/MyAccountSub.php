<?php
    require 'database.php';

    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, true);
    $array = $request[0];

    //$userID = $array['userID'];

    $userID=2;
    $query1 = "SELECT *
    FROM subscription
    INNER JOIN subscriptiontype
    ON subscription.SubscriptionTypeId = subscriptiontype.subscriptionTypeID WHERE subscription.userID = $userID";
    $rows = array();


        $query = $connection->prepare($query1); 
        $query->execute();
        while($row = $query->fetch())
        {
            $rows[] = $row;
        }
  
    print json_encode($rows); //convert php data to json data
?>