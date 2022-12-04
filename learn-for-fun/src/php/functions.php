
<?php

function check_login($pdo)
{
    if(isset($_SESSION['userID']))
    {
        $userid = $_SESSION['userID'];
        $query= $pdo->prepare("SELECT * FROM user WHERE userID=? LIMIT 1");
        $query->execute([$userid]);
        $result = $query->fetch(PDO::FETCH_ASSOC);

        if($result)
        {
            return $result;
        }

    }

    
}

?>