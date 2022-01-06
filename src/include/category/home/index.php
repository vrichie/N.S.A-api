<?php
include '../../connect.php';
$cat=$_GET['cat'];
$response=[];



$select="SELECT * FROM post WHERE category='$cat' ORDER BY id DESC LIMIT 8";
$results=mysqli_query($conn,$select);


if($results){
    while($post=mysqli_fetch_assoc($results)){
        $res=new stdClass();
        $res->id=$post['id'];
        $res->slug=$post['slug'];
        $res->title=$post['title'];
        $res->summary=$post['summary'];
        $res->pic=$post['pic'];
        $res->date=$post['date'];
        array_push($response,$res);
    }

}else{
    $res=new stdClass();
    $res->message="failed";
    array_push($response,$res);
}

echo json_encode($response);




