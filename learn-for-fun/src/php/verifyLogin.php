<?php
    require 'database.php';

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Credentials: true');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, true);
    $array = $request[0];

    $email = $array['email'];
    $password = $array['password'];
    $message="failed";

    // If email and password aren't empty
    if (!empty($email) && !empty($password)) {
        $query = $connection->prepare("SELECT COUNT(*) FROM user WHERE email='" . $email . "'
        AND password='" . $password ."'"); 
        $query->execute();
        $count = $query->fetchColumn();

        // If the query got results
        if ($count == 1) { 
            $message ="success";
        }

        elseif ($count !== 1){
            $message="failed";
        }

        $response = $message;
        echo json_encode($response);
    };
?>