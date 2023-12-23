import './review.css'
import React, { useState , useEffect} from 'react'
import {useParams } from 'react-router-dom';

import TopHeader from '../home/header/topHeader'
import SideNavbar from '../home/header/sideNavbar'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 const Review=()=> {
    const [review,setReview] = useState([]);
    const {id} = useParams();
    console.log("inside review",id)
    const reviewApi = `https://academics.newtonschool.co/api/v1/ecommerce/review/${id}`;
   
    async function getSingleProductReview()
    {
        try
        {
            const res = await fetch(reviewApi,{
                method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }});
            const result = await res.json();
            console.log("review.data : ",result.data);  
            setReview(result.data);
        
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getSingleProductReview();
    },[]);
  return (
    <div>
      <TopHeader/>
      <SideNavbar/>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Customer Rating
            </Typography>
            {review?.map((i)=>{return(
            <Typography>
                Ratings : {i.ratings}
                <br />
                Review : {i.text}
            </Typography>)})}
        </CardContent>
      </Card>
  
        <div className="d-flex justify-content-between align-items-center mt-2">
            <p className="usr-name">Bewakoof Fans</p>
            <div className="thumbsIcon d-flex">
            <p className="upVoteCount">(3471)</p>
            <img src="https://images.bewakoof.com/web/ic-up-mb---vote.svg" />
            </div>
        </div>
        <div className="review-time-flag-container">
            <p className="review-time">2021-06-24 </p>
            <p className="review-time">3471 people found this helpful</p>
        </div>
</div>

    
  )
}
export default Review