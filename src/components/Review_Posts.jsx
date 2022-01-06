import React from 'react'


import Tri from '../assets/editors_images/tri.jpg'
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

import '../styles/Review_Posts.css'
import { Input ,Button,Form,Select, } from 'semantic-ui-react'


export default function Review_Posts() {



    const options_gossip = {
        responsive: true,
        plugins: {
         
          title: {
            display: true,
            text: 'your numbers for Gossip',
          },
        },
      };

      const options_entertainment = {
        responsive: true,
        plugins: {
         
          title: {
            display: true,
            text: 'your numbers for Entertainmnet',
          },
        },
      };


      const options_world = {
        responsive: true,
        plugins: {
         
          title: {
            display: true,
            text: 'your numbers for World',
          },
        },
      };



      const options_news = {
        responsive: true,
        plugins: {
         
          title: {
            display: true,
            text: 'your numbers for News',
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
   
  ],
};



const data_entertainment = {
    labels,
    datasets: [
      {
        label: 'Entertainment',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(100, 53, 201)',
        backgroundColor: 'rgba(255,255, 255, 1)',
      },
     
    ],
  };
  const data_world = {
    labels,
    datasets: [
      {
        label: 'World',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(163, 51, 200)',
        backgroundColor: 'rgba(255,255, 255, 1)',
      },
     
    ],
  };
  const data_news = {
    labels,
    datasets: [
      {
        label: 'News',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(0,181,173)',
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


            <div id="review_wrapper_post">
                <div id="posts_review_wrapper">

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
                <div id="posts_reviews_stats">
                    <div className="chart_wrapper">
                    <Line options={options_gossip} data={data_gossip} />;

                    </div>


                    <div className="chart_wrapper">
                    <Line options={options_entertainment} data={data_entertainment} />;

                    </div>

                    <div className="chart_wrapper">
                    <Line options={options_world} data={data_world} />;

                    </div>

                    <div className="chart_wrapper">
                    <Line options={options_news} data={data_news} />;

                    </div>
                </div>
            </div>
            
        </div>
    )
}
