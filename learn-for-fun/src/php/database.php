<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Credentials: true');

    $host = 'localhost';
    $db   = 'teambaseddev';
    $user = 'root';
    $pass = '';

    #DSN means Data Source Name, this creates the information link to the database.
    $dsn = "mysql:host=$host;dbname=$db";

    $options = [    
    #PDO means PHP Data Object, here is finding the option => then setting its value
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,    
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,    
    PDO::ATTR_EMULATE_PREPARES   => false,];

    try 
    {    
        #then try to connect to the database
        $connection = new PDO($dsn, $user, $pass, $options);
    } 
    catch (\PDOException $e) 
    {     
        #if fails, through error message
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
?>