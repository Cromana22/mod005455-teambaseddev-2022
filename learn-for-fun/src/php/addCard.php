<?php
    require 'database.php';

    header("Access-Control-Allow-Origin: http://localhost:3000");
    header('Access-Control-Allow-Headers: content-type');
    header('Access-Control-Allow-Credentials: true');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, true);
    $array = $request[0];

    //get user ID
    $userId = 0;
    $email = $array['email'];
    $query = $connection->prepare("SELECT user.userID AS userId FROM user WHERE user.email = '" .$email. "'"); 
    $query->execute();
    $rows = array(); //create php array of results
    while($row = $query->fetch()) { $rows[] = $row; };
    $userId = $rows[0]['userId'];

    $cardName = $array['cardName'];
    $cardNumber = $array['cardNumber'];
    $expiry = $array['expiry'];
    $cvv = $array['cvv'];

    $query = $connection->prepare("INSERT INTO `paymentdetails` (`cardName`, `cardNumber`, `expiry`, `cvv`, `userID`)
        VALUES ('" .$cardName. "', '" .$cardNumber. "', '" .$expiry. "', '" .$cvv. "', '" .$userId. "')"); 
    $query->execute();
    $countsuccess = $query->rowCount();

    if ($countsuccess === 1) {
        $message = "success";
        echo json_encode($message);
    }
    else {
        $message = "failed";
        echo json_encode($message);
    }
?>