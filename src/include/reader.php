<?php





require './connect.php';


$select="SELECT * FROM post where id=17";
$response=[];

$feedback=mysqli_query($conn,$select);
if($feedback){
    $results=mysqli_fetch_assoc($feedback);

    $res=new stdClass();
    $res->message="sucess";
    $res->post_uid=$results['post_uid'];
    $res->title=$results['title'];
    $res->body=$results['body'];
    $res->category=$results['category'];
    $res->creator="ritchie";
    $res->date=$results['date'];
    $res->pic=$results['pic'];

    array_push($response,$res);
    echo json_encode($response);

}else{
    echo json_encode(array('message'=>'failed'));
}