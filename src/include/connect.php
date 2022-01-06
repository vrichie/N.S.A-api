<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
header("Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$host="localhost";
$usernamr="root";
$passcode="";
$db="newsspace";

$conn =new mysqli($host,$usernamr,$passcode,$db);




if(!$conn){
    echo "error".'</br>'.mysqli_connect_error($conn);
}



