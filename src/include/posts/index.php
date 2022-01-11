<?php

include '../connect.php';

$slug=$_GET['slug'];

$post=new stdClass();

$select="SELECT * FROM  post WHERE slug='$slug'";
$result=mysqli_query($conn,$select);

if($posts=mysqli_fetch_assoc($result)){
    $post->exists=true;
    $post->id=$posts['id'];
    $post->post_uid=$posts['post_uid'];
    $post->title=$posts['title'];
    $post->summary=$posts['summary'];
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



    
}else{

    $post->exists=false;

}
echo json_encode($post);