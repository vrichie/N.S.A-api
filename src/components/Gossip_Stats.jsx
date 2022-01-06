import React from 'react'
import '../styles/Gossip_Stats.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';


  import Tri from '../assets/editors_images/tri.jpg'

import User from '../assets/editors_images/user2.jpg'



import { Button,Card, Icon, Image } from 'semantic-ui-react'

export default function Gossip_Stats() {
 const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


    const options_created = {
        responsive: true,
        plugins: {
         
          title: {
            display: true,
            text: 'Data for posts created ',
          },
        },
      };


   

    const data_created = {
        labels,
        datasets: [
          {
            label: 'posts created this month',
            data: [28,12,45,12,9,41,21],
            backgroundColor: 'rgba(33, 133, 208, 0.5)',
          },
          
        ],
      };
      



      const options_read = {
        responsive: true,
        plugins: {
         
          title: {
            display: true,
            text: 'Data for posts Read ',
          },
        },
      };


      const data_read = {
        labels,
        datasets: [
            {
                label: 'Posts read this month',
                data:[360,130,430,120,300,220,150],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
          
        ],
      };
      


    return (
        <div>
            <div id="fake_nav">
                <h2>
                    ritchie
                </h2>

                <Button negative>Logout</Button>
            </div>



            <div className="created_bars bg-light">
                <div className="created_bar">
                <Bar options={options_created} data={data_created} />
                </div>

                <div className="created_bar">
                <Bar options={options_read} data={data_read} />
                </div>

            </div>

            <div className="popularPost">
                <div className="pp_wrapper">

                        <h1>
                            Our most read popular post
                        </h1>

                     <div className="ppostr bg-light">
                        <div className="postr_imaage">
                            <img src={Tri} alt="" />
                        </div>
                        <div className="postr_details">
                            <h3>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, qui.
                            </h3>

                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex aliquam vel voluptatibus nihil maxime aut.
                            </p>

                            <Button negative>delete post</Button>

                        </div>
                    </div>
                </div>

                <div className="pp_writer">
                    <div className="pp_writer_card bg-light">
                        <img src={User} alt="" />
                        <p>
                            
                        <h5>
                            Written by:Jessica jones
                        </h5>
                            12/11/2015
                        </p>
                       
                        <Button
                            color='red'
                            content='Like'
                            label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
                        />

                    </div>
                
                
                
                </div>


            </div>


                <div className="top_writers">
                    <h1>

                    top writers
                    </h1>

                    <div className="top_writers_cards bg-light">
                        <div className="tw_card">
                                <img src={User} alt="" />
                    
                    
                    
                            <div className="tw_card_details">
                                <h2>Jessica jones</h2>
                                <h3>
                                    joined on 12/11/2012
                                </h3>

                                <h1>
                                    202 articles
                                </h1>

                            </div>
                        </div>


                        <div className="tw_card">
                                <img src={User} alt="" />
                    
                    
                    
                            <div className="tw_card_details">
                                <h2>Jessica jones</h2>
                                <h3>
                                    joined on 12/11/2012
                                </h3>

                                <h1>
                                    202 articles
                                </h1>

                            </div>
                        </div>

                        <div className="tw_card">
                                <img src={User} alt="" />
                    
                    
                    
                            <div className="tw_card_details">
                                <h2>Jessica jones</h2>
                                <h3>
                                    joined on 12/11/2012
                                </h3>

                                <h1>
                                    202 articles
                                </h1>

                            </div>
                        </div>

                    </div>
                </div>
                
        </div>
    )
}
