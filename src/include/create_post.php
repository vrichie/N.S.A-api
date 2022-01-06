<?php

require './connect.php';


$title=$_POST['title'];
$bbody=$_POST['body'];
$category=$_POST['category'];
$creator=$_POST['creator'];
$picture=$_POST['picture'];
$summary=$_POST['summary'];
$post_uid=uniqid();
$pic=$_FILES['pic']['name'];


//creating slug

function slug($string){

    $string=str_replace(" ","-",$string);
    $string=str_replace("`","-",$string);
    $string=strtolower($string);

    return $string;


}

$title=str_replace("'","`",$title);
$slug=slug($title);

$bbody=str_replace("'","`",$bbody);
$summary=str_replace("'","`",$summary);





$response=[];



$res=new stdClass();


//image upload
$path="../assets/post_images/";
$pic_temp=$_FILES['pic']['tmp_name'];
$file=$path.$pic;
$move=move_uploaded_file($pic_temp,$file);


if($move){
    $res->image='uploaded';
    $insert="INSERT INTO post(title,pic,body,category,creator_uid,post_uid,slug,summary) 
            VALUES('$title','$pic','$bbody','$category','$creator','$post_uid','$slug','$summary')";
    $insertion=mysqli_query($conn,$insert);
    if($insertion){
        $res->message='success';
        array_push($response,$res);
    }
    else{
        $res->message=mysqli_error($conn);
        array_push($response,$res);

    }

}else{

    $res->image='failed';
    $res->message='failed';
    array_push($response,$res);

}

echo json_encode($response);