<?php

include '../../connect.php';

$cat=$_GET['cat'];

$post=new stdClass();

$select="SELECT * FROM  post WHERE category='$cat' ORDER BY id DESC LIMIT 1";
$result=mysqli_query($conn,$select);

if($posts=mysqli_fetch_assoc($result)){
    $post->exists=true;
    $post->id=$posts['id'];
    $post->post_uid=$posts['post_uid'];
    $post->slug=$posts['slug'];
    $post->title=$posts['title'];
    $post->summary=$posts['summary'];
    $post->creator_uid=$posts['creator_uid'];
    $post->date=$posts['date'];
    $post->pic=$posts['pic'];

    
}else{

    $post->exists=false;

}
echo json_encode($post);