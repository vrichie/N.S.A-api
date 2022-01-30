<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
header("Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$host="localhost";
$usernamr="root";
$passcode="";
$db="newsspace";

// $host="localhost";
// $usernamr="richkin1";
// $passcode="lvi;Qe5EG)C610";
// $db="richkin1_richking";

$conn =new mysqli($host,$usernamr,$passcode,$db);




if(!$conn){
    echo "error".'</br>'.mysqli_connect_error($conn);
}



