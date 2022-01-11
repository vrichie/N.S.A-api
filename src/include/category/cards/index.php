<?php


//getting data for result

function get_cards($category){


    // $response=[];


    include '../../connect.php';
    $select="SELECT * FROM post WHERE category='$category' ORDER BY id DESC LIMIT 1";
    $results=mysqli_query($conn,$select);
    // print_r($results);

    $res=new stdClass();
    if($results){
        $result=mysqli_fetch_assoc($results);
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


        
    
        $res->$category='true';
        $res->id=$result['id'];
        $res->tag=ucfirst($result['category']);
        $res->slug=$result['slug'];
        $res->category=$result['category'];
        $res->pic=$result['pic'];
        $res->title=$result['title'];
        $res->date=$result['date'];
        $res->summary=$result['summary'];


        //get the editors username and pic
        $cuid=$result['creator_uid'];


        $select2="SELECT * FROM editors WHERE Editor_uid='$cuid'";
        $user=mysqli_query($conn,$select2);
        $user=mysqli_fetch_assoc($user);

        $res->username=$user['username'];
        $res->profile=$user['pic'];




        

    }else{
        $res->$category='false';
    }

    // array_push($response,$res);
    // echo json_encode($response);
    return $res;


}

$cards=[];

array_push($cards,get_cards("news"));
array_push($cards,get_cards("gossip"));
array_push($cards,get_cards("entertainment"));
array_push($cards,get_cards("world"));





echo json_encode($cards);

