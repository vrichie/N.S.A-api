<?php

include '../connect.php';

$category=$_GET['cat'];
$response=[];



$select="SELECT * FROM  post WHERE category='$category' ORDER BY id DESC LIMIT 6 ";
$result=mysqli_query($conn,$select);

if($result){

    while($posts=mysqli_fetch_assoc($result)){
        $post=new stdClass();
        $post->message=true;
        $post->id=$posts['id'];
        $post->slug=$posts['slug'];
        $post->summary=$posts['title'];

        array_push($response,$post);
       
 
        
    }
}
else{
    $post=new stdClass();
    $post->message=false;
    array_push($response,$post);

}
echo json_encode($response);