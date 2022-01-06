<?php
include '../../connect.php';

$select="SELECT * FROM post WHERE id='39'";
$result=mysqli_query($conn,$select);
$result=mysqli_fetch_assoc($result);



$res=new stdClass();

if($result['category']==='news'){
    $res->background='#009c95';
}        
if($result['category']==='gossip'){
    $res->background='#1678c2';
}
if($result['category']==='entertainment'){
    $res->background='#5829bb';
}
if($result['category']==='world'){
    $res->background='#9627ba';
}
$res->id=$result['id'];
$res->slug=$result['slug'];
$res->title=$result['title'];
$res->summary=$result['summary'];
$res->pic=$result['pic'];
$res->date=$result['date'];
$res->category=$result['category'];
$res->tag=ucfirst($result['category']);


echo json_encode($res);
// print_r($result);
