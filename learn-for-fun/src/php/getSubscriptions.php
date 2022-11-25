<?php
    require 'database.php';
    
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");

    if (isset($_COOKIE['loggedin'])) {
        
        $loggedin = $_COOKIE['loggedin'];

        if ($loggedin = 'Y') {
            $email = $_COOKIE['email'];

            $query = $connection->prepare("SELECT
                user.userID AS userId,
                subscription.subscriptionID AS subscriptionId, 
                subscriptiontype.subscriptionTypeName as subscriptionType, 
                subscription.courseID AS courseId
                FROM user
                JOIN subscription ON subscription.userID = user.userID 
                JOIN subscriptiontype ON subscriptiontype.subscriptionTypeID = subscription.SubscriptionTypeId
                WHERE user.email = '" .$email. "'"
            ); 
            $query->execute();

            $rows = array(); //create php array of results
            while($row = $query->fetch())
            {
                $rows[] = $row;
            }

            print json_encode($rows); //convert php data to json data and send back to react
        }
    }

    else {
        $rows = array(); //create an empty php array
        print json_encode($rows); //convert php data to json data and send back to react
    };
?>