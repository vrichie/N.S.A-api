import React,{useState,useEffect} from 'react'
import '../styles/login.css'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom';

import axios from 'axios'



export default function Login() {


    const [name,setName]=useState('');
    const [pass,setPass]=useState('');
    const [error,setError]=useState('');
    const [logged,setLogged]=useState(localStorage.getItem("isLoggedIn"));
    const [firstname,setFirstname]=useState(localStorage.getItem("firstname"));
    const [email,setEmail]=useState(localStorage.getItem("email"));
    const [tel,setTel]=useState(localStorage.getItem("tel"));
    const [lastname,setLastname]=useState(localStorage.getItem("lastname"));
    const [username,setUsername]=useState(localStorage.getItem("username"));
    const [editor_uid,setEditor_uid]=useState(localStorage.getItem("editor_uid"));
    const [profile,setProfile]=useState(localStorage.getItem("profile"));
    let history=useHistory();


    useEffect(()=>{
        
        localStorage.setItem("firstname",firstname);
        localStorage.setItem("lastname",lastname);
        localStorage.setItem("username",username);
        localStorage.setItem("isLoggedIn",logged);
        localStorage.setItem("editor_uid",editor_uid);
        localStorage.setItem("profile",profile);
        localStorage.setItem("tel",tel);
        localStorage.setItem("email",email);

        if(logged===true){
            history.push("/home");

        }
        

    },[logged]);

    const Handlesubmit=(e)=>{
        e.preventDefault();


        const api_url="http://localhost/projects/api/src/include/login.php";

        const formData=new FormData();
        formData.append('username',name);
        formData.append('password',pass);

        axios.post(api_url,formData)
        .then(res=>{

            if(res.data[0].message==="true"){
            setEditor_uid(res.data[0].editor_uid);
            setFirstname(res.data[0].firstname);
            setLastname(res.data[0].lastname);
            setUsername(res.data[0].username);
            setProfile(res.data[0].profile);
            setTel(res.data[0].tel);
            setEmail(res.data[0].email);
            setLogged(true);
            }else{
            setEditor_uid('');
            setFirstname('');
            setLastname('');
            setUsername('');
            setLogged(false);
            setProfile('');
            let usernamer=res.data[0].usernameCheck;

            if(usernamer==='true'){
                setError(<div id="error" className="input_wrapper" > <p>
                Check your password
                </p></div>);
            }else{
                setError(<div id="error" className="input_wrapper" > <p>
                Check your username and password
                </p></div>);
            }





            }
            console.log(res.data[0]);
            
        });

      


        setPass("");
        






    }


    


    return (
        <div id='login_wrapper' className='bg-light'>

            <div id="form">

                <div id="logo_wrapper">
                     <h1>
                    newsspace
                </h1>

                <p>
                    Everything news and inbetween
                </p>
                </div>
               

                <form onSubmit={Handlesubmit} >




                    {error}




                    <div className="usrname" className="input_wrapper">
                        <label htmlFor="username">Username</label>
                    <input type="text" required name="username" value={name} onChange={(e)=>{setName(e.target.value)}}/>


                    </div>

                    <div id="pssword" className="input_wrapper">
                         <label htmlFor="password">password</label>
                    <input type="password" required name="password" onChange={(e)=>{setPass(e.target.value)}} value={pass} id="password" />


                    </div>
                    
                   
                    <button type="submit">
                        login
                    </button>

                </form>



                <div id="more">
                <p className="ptags">
                ©️2020 News-space.| |All Rights Reserved| | TERMS & CONDITIONS.| |Privacy| | Copyrights. Acknowledgement. |Info
                </p>
                <p className="ptags">
                    By:k_ritchie
                </p>
                </div>


            </div>
            
        </div>
    )
}
