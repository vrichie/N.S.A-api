import {useState} from 'react'
import Placeholder from '../assets/icons/add-image.png'
import { Input ,Button,Form,Select, } from 'semantic-ui-react'
import '../styles/Create_post.css'
import '../styles/landing.css'
import axios from 'axios'


export default function Create_post() {

    
    const [title,setTitle]=useState('');
    const [picture,setPicture]=useState('');
    const [body,setBody]=useState('');
    const [category,setCategory]=useState('');
    const [message,setMessage]=useState('');
    const [uploaded,setUploaded]=useState('');
    const [creator,setCreator]=useState(localStorage.getItem('editor_uid'));
    const [summary, setSummary] = useState('');




const options = [
    { key: 'n', text: 'News', value: 'news' },
    { key: 'w', text: 'World', value: 'world' },
    { key: 'g', text: 'Gossip', value: 'gossip' },
    { key: 'e', text: 'Entertainment', value: 'entertainment' },
  ]
  

    const [{alt, src}, setImg] = useState({
        src: Placeholder,
        alt: 'Upload an Image'
    });

  

    const handleImg = async (e) => {


        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
         
            
        }   

        const file=e.target.files[0];

        setPicture(file);


    };

   

    const fakeClick=()=>{
        let input=document.getElementById('main_image');
        input.click();
    }

    const Handlefom=(e)=>{
        e.preventDefault();

        const formData=new FormData();

        formData.append('title',title);
        formData.append('body',body);
        formData.append('category',category);
        formData.append('creator',creator);
        formData.append('pic',picture);
        formData.append('summary',summary);


        const api_url='http://localhost/projects/api/src/include/create_post.php';

        console.log(formData);

        axios.post(api_url,formData)
        .then(res=>{
            console.log(res.data);
            let message=res.data[0].message;
            let upload=res.data[0].image;
            setMessage(res.data[0].message);
            setUploaded(res.data[0].image);
            if(upload==='uploaded' && message==='success'){
                setTitle('');
                setBody('');
                setCategory('');
                setPicture('');
                setSummary('');    
                setImg({
                    src: Placeholder,
                    alt: 'Upload an Image'
                });  
            }
        })
        

    }



    return (
        <div id="createpost_wrapper">
            <div id="fake_nav">
                <h2>
                    ritchie
                </h2>
                {message}

                {uploaded}

                <Button negative>Logout</Button>

                
            </div>

            <form action="#" id="formmm" onSubmit={Handlefom}>

            <div id="contxt">

                <div id="title_wrapper">
                    
                    <input type="text" required name="title" id="title" placeholder='Your title goes here..' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>



                <div id="image_wrapper" onClick={fakeClick}>

                    <input type="file" required onChange={handleImg} name="main_image" id="main_image" />
                    <img src={src} alt={alt} />
            
                </div>
                <div id="textarea_wrapper">
                


                    <textarea name="post_body" required id="post_body"      value={body} onChange={(e)=>{setBody(e.target.value)}}     placeholder='Tell us more about you...' cols="100" ></textarea>


                </div>


            </div>

            <div id="extra_contxt">
                <Form>
                    <Form.TextArea label='About' placeholder='Tell us more about you...' value={summary} onChange={(e)=>{setSummary(e.target.value)}}   required/>

                </Form>

            
                <Form.Field
                control={Select}
                options={options}
                placeholder='Category'
                onChange={(e,data)=>{setCategory(data.value)}}
                value={category} />
                <Button  >Create post</Button>

            </div>





            </form>

         
            
        </div>
    )
}
