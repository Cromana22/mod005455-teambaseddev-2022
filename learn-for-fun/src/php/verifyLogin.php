<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "teambaseddev";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}  
    
    $username = $_POST['username'];
    $password = $_POST['password'];
    $message="failed";
    if (!empty($username) && !empty($password)) { 
        $query = $pdo->prepare("SELECT * FROM users WHERE username ='" . $username . "' OR emailAddress='" . $username . "'
         AND password='" . $password . "' LIMIT 1");
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);



        if ($query->rowCount() > 0) { // If the query got any results
            $message ="success"
            
        }
        elseif ($query->rowCount()<=0){
            $message="failed"
        }
        $response[] = array("Message"=>$message);
        echo json_encode($response)
    }

?>