<?php

include '../../connect.php';

$keyword=$_GET['k'];
$category=$_GET['c'];

$response=[];
//if there is a category
if($category==='all' && $keyword!=''){
    $select="SELECT * FROM post WHERE title LIKE '%$keyword%' ORDER BY id DESC LIMIT 5";
    $results=mysqli_query($conn,$select);
    $rows=mysqli_num_rows($results);

    if($rows>=1){
        while($result=mysqli_fetch_assoc($results)){
            $res=new stdClass();

            $res->Searchresult=true;
            $res->results=$rows;
            $res->id=$result['id'];
            $res->slug=$result['slug'];
            $res->title=$result['title'];
            $res->summary=$result['summary'];
            $res->date=$result['date'];
            $res->pic=$result['pic'];
            array_push($response,$res);
        }
    }else{
        $res=new stdClass();
        $res->Searchresult=false;

        $res->results=$rows;
        array_push($response,$res);

    }
    


}else{
    $select="SELECT * FROM post WHERE title LIKE '%$keyword%' AND category LIKE '%$category%'  ORDER BY id DESC LIMIT 5";
    $results=mysqli_query($conn,$select);
    $rows=mysqli_num_rows($results);
    

    if($rows>=1){
         while($result=mysqli_fetch_assoc($results)){
        $res=new stdClass();

        $res->Searchresult=true;
        $res->results=$rows;
        $res->id=$result['id'];
        $res->slug=$result['slug'];
        $res->title=$result['title'];
        $res->summary=$result['summary'];
        $res->date=$result['date'];
        $res->pic=$result['pic'];
        array_push($response,$res);
    }
    }else{
        $res=new stdClass();
        $res->Searchresult=false;
        $res->results=$rows;
        array_push($response,$res);
    }
   
}


echo json_encode($response);