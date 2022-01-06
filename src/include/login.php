<?php
require './connect.php';



$username=$_POST['username'];
$password=$_POST['password'];

$response=[];
 $res=new stdClass();

$check="SELECT * FROM editors WHERE username='$username'";
$result=mysqli_query($conn,$check);



if(mysqli_num_rows($result)>=1){

    $results=mysqli_fetch_assoc($result);
    $passw=$results['password'];

    // //compare password
    if(password_verify($password,$passw)){
        $res->firstname=$results['firstname'];
        $res->lastname=$results['lastname'];
        $res->username=$results['username'];
        $res->editor_uid=$results['Editor_uid'];
        $res->email=$results['email'];
        $res->tel=$results['phone_no'];
        $res->profile=$results['pic'];
        $res->usernameCheck='true';
        $res->message='true';
       


    }else{
      
        $res->usernameCheck='true';
        $res->message='failed';
        


    }
}
else{
    $res->usernameCheck='failed';
    $res->message='failed';
}
    array_push($response,$res);
echo json_encode($response);

