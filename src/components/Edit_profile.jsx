import {useState} from 'react'
import '../styles/landing.css'

export default function Edit_profile() {

  const profile=localStorage.getItem('profile');
  const Placeholder=require("../assets/editors_images/"+profile).default;

  const [{alt, src}, setImg] = useState({
    src: Placeholder,
    alt: 'Upload an Image'
});

const handleImg = (e) => {
    if(e.target.files[0]) {
        setImg({
            src: URL.createObjectURL(e.target.files[0]),
            alt: e.target.files[0].name
        });    
    }   
}

const fakeClick=()=>{
  let input=document.getElementById('new_profile');
  input.click();
}

    return (
       <form id="ep_form">

    
          <div id="form_text" className='bg-light'>
          <div className="input_form_wrapper">

            <label htmlFor="telephone">Telephone</label>
            <input type="text" name="telephone" />
          </div>



          <div className="input_form_wrapper">

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>




          <div className="input_form_wrapper">

            <label htmlFor="password">password</label>
            <input type="password" name="pasword" id="password" />
          </div>




          </div>


          <div id="image_preview_ep">

            <div id="ep_wrapper" onClick={fakeClick}>


              <input type="file" required onChange={handleImg} name="new_profile" id="new_profile" />
              <img src={src} alt={alt} />


 

            </div>


            <button type="submit">make changes</button>
            
          </div>



          </form>
    )
}
