<?php
    require 'database.php';

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Credentials: true');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, true);
    $array = $request[0];

    $userid = 0;
    $email = $array['email'];
    $password = $array['password'];
    $firstname = $array['firstname'];
    $lastname = $array['lastname'];
    $address1 = $array['address1'];
    $address2 = $array['address2'];
    $city = $array['city'];
    $county = $array['county'];
    $postcode = $array['postcode'];
    $message="failed";

    //Get last ID used and set next one
    $query = $connection->prepare("SELECT MAX(userID) FROM user "); 
    $query->execute();
    $count = $query->fetchColumn();
    $userid = $count+1;

    //check email isn't already in use
    $query = $connection->prepare("SELECT COUNT(*) FROM user WHERE email='" . $email . "'"); 
    $query->execute();
    $countemail = $query->fetchColumn();

    // If email isn't already there then register
    if ($countemail === 0) {
        $query = $connection->prepare("INSERT INTO `user`
            (`email`, `userID`, `password`, `firstName`, `lastName`, `address1`, `address2`, `city`, `county`, `postcode`) VALUES ('" .$email. "', " .$userid. ", '" .$password. "', '" .$firstname. "', '" .$lastname. "', '" .$address1. "', '" .$address2. "', '" .$city. "', '" .$county. "', '" .$postcode. "')
        "); 
        $query->execute();
        $countsuccess = $query->rowCount();

        if ($countsuccess === 1) {
            $message = "registered successfully";
        }
    };

    echo json_encode($message);
?>