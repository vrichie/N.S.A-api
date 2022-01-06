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

    
}else{

    $post->exists=false;

}
echo json_encode($post);