<?php
    require 'database.php';
    
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Headers: *');
    header("Access-Control-Allow-Methods: *");
    header('Access-Control-Allow-Credentials: true');

    if (isset($_COOKIE['loggedin'])) {
        $loggedin = $_COOKIE['loggedin'];
        if ($loggedin = 'Y') {
            
            $typeId = $_GET['typeId'];
            $date = date("Y-m-d");
            if (isset($_GET['courseId'])) { $courseId = $_GET['courseId']; } else { $courseId = null; };

            //get user ID
            $email = $_COOKIE['email'];
            $query = $connection->prepare("SELECT user.userID AS userId FROM user
                WHERE user.email = '" .$email. "'"
            ); 
            $query->execute();
            $rows = array(); //create php array of results
            while($row = $query->fetch()) { $rows[] = $row; };
            $userId = $rows[0]['userId'];

            $query = $connection->prepare("INSERT INTO `subscription` (`userID`, `dateRaised`, `SubscriptionTypeId`, `courseID`)
                VALUES ('".$userId."','".$date."','".$typeId."','".$courseId."')"); 
            $query->execute();
            
            $message = "success";
            print json_encode($message);
        }
        
        else {
            $message = "failed";
            print json_encode($message);
        }
    }

    else {
        $message = "failed";
        print json_encode($message);
    }
?>