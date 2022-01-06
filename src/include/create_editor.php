<?php
require './connect.php';

$fname=$_POST['fname'];
$lname=$_POST['lname'];
$username=$_POST['uname'];
$email=$_POST['email'];
$tel=$_POST['tel'];
$gender=$_POST['gender'];
$pic=$_FILES['file']['name'];
$pass=$_POST['pass'];
$uid=uniqid();



$folderPath="test/";


$file_tmp=$_FILES['file']['tmp_name'];


$file=$folderPath.$_FILES['file']['name'];

$move=move_uploaded_file($file_tmp,$file);

$response=[];


$res=new stdClass();







if($move){
   $res->image='uploaded';

   //hashing the password
   $pass=password_hash($pass,PASSWORD_DEFAULT);




    $insert="INSERT INTO editors(Editor_uid,firstname, lastname, username, email, phone_no, gender, pic,password)
    VALUES('$uid','$fname','$lname','$username','$email','$tel','$gender','$pic','$pass')";


    $insertion=mysqli_query($conn,$insert);



    if($insertion){
        $res->message='sucess';

        array_push($response,$res);
    }else{
        $res->message='failed';

        array_push($response,$res);
    }

}else{
    $res->image='failed';
    $res->message='failed';
    
    array_push($response,$res);
}


echo json_encode($response);


