<?php


require '../connect.php';



$type="entertainment";

$response=[];

$select="SELECT * FROM  post WHERE category='$type'";
$result=mysqli_query($conn,$select);

while($posts=mysqli_fetch_assoc($result)){
    $post=new stdClass();
    $post->id=$posts['id'];
    $post->post_uid=$posts['post_uid'];
    $post->title=$posts['title'];
    $post->body=$posts['body'];
    $post->category=$posts['category'];
    $post->creator_uid=$posts['creator_uid'];
    $post->date=$posts['date'];
    $post->pic=$posts['pic'];


        //get the editors username and pic
        $cuid=$posts['creator_uid'];


        $select2="SELECT * FROM editors WHERE Editor_uid='$cuid'";
        $user=mysqli_query($conn,$select2);
        $user=mysqli_fetch_assoc($user);

        $post->username=$user['username'];
        $post->profile=$user['pic'];




    array_push($response,$post);
    
}
echo json_encode($response);