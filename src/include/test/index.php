<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


      
    <form action="./img.php" method="POST" enctype="multipart/form-data" id="myForm">
        <input type="file" name="image" id="image"/>
        <input type="submit"/>
     </form>


    <script>


        const myForm =document.getElementById("myForm");
        const inpFile =document.getElementById("image");



        myForm.addEventListener("submit", e=>{
            e.preventDefault();

            const formData=new FormData();
            formData.append("image",inpFile.files[0]);

            console.log(formData);

            try{
                const response =await fetch('http://localhost/projects/api/include/test/img.php',{
                    method:'POST',
                    body:formData
                });
                const result=await response.json();
                console.log(result);

            }catch(e){
                console.log(e);
            }

            // fetch("./img.php",{

            // })
            // .then(res=>console.log(res))
            // .catch(console.error);

            
        });



    </script> 
    
</body>
</html>