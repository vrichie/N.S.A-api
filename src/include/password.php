<?php

include './connect.php';

$username="ritchie";
$password="   ";

// $hash=md5($password.$username);
$hash2=password_hash($password,PASSWORD_DEFAULT);

echo ('your username :'.$username.' and password is '.$password.'</br>');
// echo('hashed password: '.$hash);

echo('</br> second hashed password: '.$hash2);


//verify
if(password_verify($password,$hash2)){
    echo '</br> valid';
}else{
    echo '</br> invalid';
}


$select="UPDATE editors SET password='$hash2' WHERE username='$username'";

if(mysqli_query($conn,$select)){
    echo "updated";
}else{
    echo "failed to update";
}