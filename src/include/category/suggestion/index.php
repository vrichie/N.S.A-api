<?php

include '../../connect.php';

$get=$_GET['cat'];

$response=[];

$select="SELECT * FROM post WHERE category='$get' ORDER BY id DESC LIMIT 6";
$results=mysqli_query($conn,$select);

while($result=mysqli_fetch_assoc($results)){
    $res=new stdClass();
    $res->id=$result['id'];
    $res->slug=$result['slug'];
    $res->pic=$result['pic'];
    $res->title=$result['title'];

    array_push($response,$res);

}

echo json_encode($response);




