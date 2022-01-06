import {useState} from 'react'
import axios from 'axios';


import { Button,Input, Checkbox, Form ,Select} from 'semantic-ui-react'

import Placeholder from '../assets/icons/add-image.png'

import '../styles/Create_Editor.css'
import '../styles/login.css'
import { ProgressBar } from 'react-bootstrap';



export default function Create_Editor() {

    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [uname,setUname]=useState('');
    const [email,setEmail]=useState('');
    const [tel,setTel]=useState('');
    const [gender,setGender]=useState('');
    const [pic,setPic]=useState('');
    const [pass,setPass]=useState('');
    const [repass,setRepass]=useState('');
    const [errors,setErrors]=useState(<p></p>);
    const [uploadpercentage,setUploadpercentage]=useState(0);
    const [avator,setAvator]=useState('');
    const [uploaded,setUploaded]=useState('');
    const [message,setMessage]=useState('');

    const [{alt, src}, setImg] = useState({
        src: Placeholder,
        alt: 'Upload an Image'
    });






    const options = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ];

    const handleImg =  (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        } 
        
        let file=e.target.files[0];
        // let base64=await convertBase64(file);
        // let pic64=base64.split(",")[1];

        setPic(file);




        // const convertBase64=(file)=>{
        //     return new Promise((resolve,reject)=>{
        //         const fileReader=new FileReader();
        //         fileReader.readAsDataURL(file);

        //         fileReader.onload=()=>{
        //             resolve(fileReader.result);
        //         };
        //         fileReader.onerror=(error)=>{
        //             reject(error);
        //         };
        //     });
        // }


    }


    const fakeClick=()=>{
        let input=document.getElementById('main_image');
        input.click();
    }

    const Handlefom=(e)=>{
        e.preventDefault();
        //check if the passwords are equal


        // console.log(fname+lname+uname+email+tel+pass+repass+gender);

       

        if(pass!=repass){
            setErrors(<div id="error" className="input_wrapper" > <p>
            passwords do not match
            </p></div>);
        }else{
            setErrors('');




            const formData=new FormData();
            formData.append('fname',fname);
            formData.append('lname',lname);
            formData.append('uname',uname);
            formData.append('email',email);
            formData.append('tel',tel);
            formData.append('gender',gender);
            formData.append('file',pic);
            formData.append('pass',pass);
            console.log(formData);


            const options={
                onUploadProgress: (progressEvent) => {
                  const {loaded, total} = progressEvent;
                  let percent = Math.floor( (loaded * 100) / total )
                  console.log( `${loaded}kb of ${total}kb | ${percent}%` );
          
                  if( percent < 100 ){
                    setUploadpercentage(percent)
                  }
                }
              }

            let api_url="http://localhost/projects/api/include/create_editor.php";
            axios.post(api_url, formData, options).then(res => { 
                setMessage(res.data[0].message);
                setUploaded(res.data[0].image);
                setUploadpercentage(100)
                
            })
          }


        }


        

    return (
        <div> 

            <div id="fake_nav">
                <h2>
                    ritchie
                </h2>
                {message}
                {uploaded}

                { uploadpercentage > 0 && <ProgressBar now={uploadpercentage} active label={`${uploadpercentage}%`} /> }


                <Button negative>Logout</Button>

                
            </div>

        <Form id="cep_form" onSubmit={Handlefom}>


            <div id="left_wrapper" className='bg-light'>

                <h2>Create new Editor profile</h2>
                
    
        
            <Form.Input    label='First Name' placeholder='First Name' required value={fname} onChange={(e)=>{setFname(e.target.value)}} />
            
            <Form.Input label='Last Name' placeholder='Last Name' required value={lname} onChange={(e)=>{setLname(e.target.value)}}/>
    

            <Form.Input label='Username' required placeholder='username' value={uname} onChange={(e)=>{setUname(e.target.value)}} />



            <Form.Input label='Email' required placeholder='joe@schmoe.com' value={email} onChange={(e)=>{setEmail(e.target.value)}} />

            <Form.Input placeholder='(0712345678)' label='Phone Number' required value={tel} onChange={(e)=>{setTel(e.target.value)}}/>

                    <Form.Field
                    control={Select}
                    label='Gender'
                    options={options}
                    placeholder='Gender'
                    required
                    value={gender}
                    onChange={(e,data)=>{setGender(data.value)}}
                />
                {errors}

            <Form.Input label='Enter Password' required type='password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
        
            <Form.Input label='Repeat Password' required type='password' value={repass} onChange={(e)=>{setRepass(e.target.value)}} />


       
            </div>


            <div id="preview_CE">

                <div id="real_pce" onClick={fakeClick}>
                    <input type="file" required onChange={handleImg} name="main_image" id="main_image" />
                    <img src={src} alt={alt} />

                </div>

                <div id="final">


                <Form.Checkbox required label='I agree to the Terms and Conditions' />

                <Button type='submit'>Create new editor</Button>

                </div>

          

            </div>
            
            
            
   


        </Form>


        </div>
    )
}
