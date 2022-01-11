<?php
include '../../connect.php';
$cat=$_GET['cat'];
$response=[];



$select="SELECT * FROM post WHERE category='$cat' ORDER BY id DESC LIMIT 5";
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


        //get the editors username and pic
        $cuid=$post['creator_uid'];


        $select2="SELECT * FROM editors WHERE Editor_uid='$cuid'";
        $user=mysqli_query($conn,$select2);
        $user=mysqli_fetch_assoc($user);

        $res->username=$user['username'];
        $res->profile=$user['pic'];










        array_push($response,$res);
    }

}else{
    $res=new stdClass();
    $res->message="failed";
    array_push($response,$res);
}

echo json_encode($response);




