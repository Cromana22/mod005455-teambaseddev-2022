<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Credentials: true');

    if (isset($_COOKIE['email'])) { $email = $_COOKIE['email']; } else { $email = ""; };
    if (isset($_COOKIE['loggedin'])) { $loggedin = $_COOKIE['loggedin']; } else { $loggedin = ""; };

    $phpArray = ["email" => $email, "loggedin" => $loggedin];

    echo json_encode($phpArray);
?>