import React,{useState,useEffect} from 'react'
import '../styles/layout.css'
import Side_nav from '../components/Side_nav'
import Landing from '../components/Landing'
import Create_post from '../components/Create_post'
import Create_Editor from '../components/Create_Editor'
import Review_Posts from '../components/Review_Posts'
import Review_Editors from '../components/Review_Editors'
import Gossip_Stats from '../components/Gossip_Stats'
import News_Stats from '../components/News_Stats'
import Entertainment_Stats from '../components/Entertainment_Stats'
import World_Stats from '../components/World_Stats'



export default function Layout() {

    const [tab,setTab]=useState('home');

    const [tabChange,setTabChange]=useState('home');

    useEffect(()=>{
        //console.log(tab);
        setTabChange(tab);

    },[tab]

    );


 const SwitchTabs=(index)=>{
       //    console.log(index);
        setTab(index);
        //console.log(tab);

 }
const Tab_switcher=()=>{

    // console.log(tabChange);


    if(tabChange==="home"){
        return(<Landing />)
    }
    


    if(tabChange==="create_post"){
        return(<Create_post />)
    }

    if(tabChange==="create_editor"){
        return(<Create_Editor />)
    }

    if(tabChange==="review_post"){
        return(<Review_Posts />)
    }

    if(tabChange==="review_editors"){
        return(<Review_Editors />)
    }






    if(tabChange==="gossip_tab"){
        return(<Gossip_Stats />)
    }


    if(tabChange==="entertainment_tab"){
        return(<Entertainment_Stats />)
    }

    if(tabChange==="world_tab"){
        return(<World_Stats />)
    }

    if(tabChange==="news_tab"){
        return(<News_Stats />)
    }
         
}
 





    return (
        <section className="bg-light" id="main_wrapper">

            <Side_nav SwitchTabs={SwitchTabs}/>


            <section id="right_side">

                {Tab_switcher()}
               
               
               
               </section>

        </section>
    )
}
