<?php
    require 'database.php';

    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, true);
    $email = $request['email'];

    //get user ID
    $query = $connection->prepare("SELECT user.userID AS userId FROM user WHERE user.email = '" .$email. "'"); 
    $query->execute();
    $rows = array(); //create php array of results
    while($row = $query->fetch()) { $rows[] = $row; };
    $userId = $rows[0]['userId'];

    //get details
    $query1 = "SELECT *
    FROM subscription
    INNER JOIN subscriptiontype
    ON subscription.SubscriptionTypeId = subscriptiontype.subscriptionTypeID WHERE subscription.userID = $userId";
    $rows = array();


        $query = $connection->prepare($query1); 
        $query->execute();
        while($row = $query->fetch())
        {
            $rows[] = $row;
        }
  
    print json_encode($rows); //convert php data to json data
?>