<?php

include '../../connect.php';

$category=$_GET['cat'];
$response=[];



$select="SELECT * FROM  post WHERE category='$category' ORDER BY id DESC LIMIT 2 ";
$result=mysqli_query($conn,$select);

if($result){
    while($posts=mysqli_fetch_assoc($result)){
        
        $post=new stdClass();
        $post->message=true;
        $post->id=$posts['id'];
        $post->slug=$posts['slug'];
        $post->pic=$posts['pic'];
        $post->title=$posts['title'];

        
        //get the editors username and pic
        $cuid=$posts['creator_uid'];


        $select2="SELECT * FROM editors WHERE Editor_uid='$cuid'";
        $user=mysqli_query($conn,$select2);
        $user=mysqli_fetch_assoc($user);

        $post->username=$user['username'];
        $post->profile=$user['pic'];



        array_push($response,$post);
       
 
        
    }
}
else{
    $post->message=false;
    array_push($response,$post);

}
echo json_encode($response);