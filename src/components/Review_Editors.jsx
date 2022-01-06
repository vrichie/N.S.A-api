import React from 'react'
import '../styles/Review_Editors.css'


import {Button,Card,Icon} from 'semantic-ui-react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';


import User from '../assets/editors_images/user2.jpg'


export default function Review_Editors() {

    const options_gossip = {
        responsive: true,
        plugins: {
         
          title: {
            display: true,
            text: 'your numbers of posts created',
          },
        },
      };



    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



    const data_gossip = {
        labels,
        datasets: [
        {
            label: 'Gossip',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(33, 133, 208)',
            backgroundColor: 'rgba(255,255, 255, 1)',
        },  
        {
            label: 'news',
            data: [15, 9, 70, 51, 16, 45, 80],
            borderColor: 'rgb(0, 181, 173)',
            backgroundColor: 'rgba(255,255, 255, 1)',
        }, 
        {
            label: 'Entertainment',
            data: [5, 49, 10, 41, 26, 5, 15],
            borderColor: 'rgb(100, 53, 201)',
            backgroundColor: 'rgba(255,255, 255, 1)',
        }, 
        {
            label: 'world',
            data: [6, 5, 18, 1, 5, 5, 4],
            borderColor: 'rgb(163, 51, 200)',
            backgroundColor: 'rgba(255,255, 255, 1)',
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




            <div id="review_wrapper">

                <div className="review_card_wrapper">
                    <div className="user_card bg-light">
                        <div className="uc_image">
                           <img src={User} alt="" /> 
                        </div>
                        <div className="uc_detail">
                            <h5>
                                Ann Gladys
                            </h5>
                            <p>
                                0701020304
                            </p>
                            <p>
                                email :ann@gmail.com
                            </p>

                            <p>
                                joined on 02/11/2017
                            </p>


                        </div>

                    </div>

                    <div className="user_stats">
                    <Line options={options_gossip} data={data_gossip} />


                    </div>
                    

                </div>




                <div className="review_card_wrapper">
                    <div className="user_card bg-light">
                        <div className="uc_image">
                           <img src={User} alt="" /> 
                        </div>
                        <div className="uc_detail">
                            <h5>
                                Ann Gladys
                            </h5>
                            <p>
                                0701020304
                            </p>
                            <p>
                                email :ann@gmail.com
                            </p>

                            <p>
                                joined on 02/11/2017
                            </p>


                        </div>

                    </div>

                    <div className="user_stats">
                    <Line options={options_gossip} data={data_gossip} />


                    </div>
                    

                </div>




                <div className="review_card_wrapper">
                    <div className="user_card bg-light">
                        <div className="uc_image">
                           <img src={User} alt="" /> 
                        </div>
                        <div className="uc_detail">
                            <h5>
                                Ann Gladys
                            </h5>
                            <p>
                                0701020304
                            </p>
                            <p>
                                email :ann@gmail.com
                            </p>

                            <p>
                                joined on 02/11/2017
                            </p>


                        </div>

                    </div>

                    <div className="user_stats">
                    <Line options={options_gossip} data={data_gossip} />


                    </div>
                    

                </div>



                <div className="review_card_wrapper">
                    <div className="user_card bg-light">
                        <div className="uc_image">
                           <img src={User} alt="" /> 
                        </div>
                        <div className="uc_detail">
                            <h5>
                                Ann Gladys
                            </h5>
                            <p>
                                0701020304
                            </p>
                            <p>
                                email :ann@gmail.com
                            </p>

                            <p>
                                joined on 02/11/2017
                            </p>


                        </div>

                    </div>

                    <div className="user_stats">
                    <Line options={options_gossip} data={data_gossip} />


                    </div>
                    

                </div>

                

            </div>





            
        </div>
    )
}
