<?php

    include '../../connect.php';
$cat=$_GET['cat'];
//getting data for result

$cards=[];

    // $response=[];


    $select="SELECT * FROM post WHERE category='$cat' ORDER BY id DESC LIMIT 4";
    $results=mysqli_query($conn,$select);
    // print_r($results);


    if($results){


        while($result=mysqli_fetch_assoc($results)){
                $res=new stdClass();

                // if($result['category']==='news'){
                //     $res->background='#009c95';
                // }        
                // if($result['category']==='gossip'){
                //     $res->background='#1678c2';
                // }
                // if($result['category']==='entertainment'){
                //     $res->background='#5829bb';
                // }
                // if($result['category']==='world'){
                //     $res->background='#9627ba';
                // }


                
            
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




                array_push($cards,$res);



        };


    }else{
        $res=new stdClass();
        $res->$category='false';
    }

    // array_push($response,$res);
    // echo json_encode($response);
 
    






 
  






echo json_encode($cards);

