import React from 'react'
import '../styles/landing.css'
import { Button } from 'semantic-ui-react'

import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto'


import Edit_Profile from './Edit_profile'

export default function Landing() {


    const username=localStorage.getItem("username");
    const email=localStorage.getItem("email");
    const fname=localStorage.getItem('firstname');
    const lname=localStorage.getItem('lastname');
    const uname=localStorage.getItem('username');
    const tel=localStorage.getItem('tel');
    const profile=localStorage.getItem('profile');


    
const data = {
    labels: [ 'News','Gossip', 'Entertainment', 'World'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5,  ],
        backgroundColor: [
          'rgba(0, 181, 173, 0.7)',
          'rgba(33, 133, 208, .7)',
          'rgba(100, 53, 201, .7)',
          'rgba(163, 51, 200, .7)',
        ],
        borderColor: [
            'rgba(0, 181, 173, 1)',
            'rgba(33, 133, 208, 1)',
            'rgba(100, 53, 201, 1)',
            'rgba(163, 51, 200, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 5
      },
    ],
  }
  



    return (
        <div id="landing_main_wrapper">
            <div id="fake_nav">
                <h2>
                    {username}
                </h2>

                <Button negative>Logout</Button>

                
            </div>

            <div id="profile">


                <div id="profile_view">

                    <div id="profile_pic">
                        <img src={require("../assets/editors_images/"+profile).default} alt="ritchie"/>

                    </div>

                    <div id="details">

                        <h2>
                            {fname+' '+lname}
                        </h2>
                        <h3>
                            {uname}
                        </h3>
                          <p>
                              {email}
                          </p>

                          <p>
                              {tel}
                          </p>


                    </div>

                </div>
                
                 <div id="landin_stats">
              
                    <Doughnut data={data}  
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                    }}/>
        

                </div>

            </div>

                <div id="profile_edit">
                    <h2>
                        Edit your profile
                    </h2>
                    <Edit_Profile />

                </div>

           




            
            
        </div>
    )
}
