<?php


header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
header("Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



      $file = $_FILES['image'];
      $temp =$_FILES['tmp_name'];
      $path='../images/'.uniqid().'.jpg';


      $image=file_get_contents($temp);
      $image=imagecreatefromstring($image);

      if($image){
         imagejpeg($image,$path);
         imagedestroy($image);

         echo json_encode(array('success'=>'File uploaded'));
      }else{

         echo json_encode(array('failed'=>'File not uploaded'));
      }
      