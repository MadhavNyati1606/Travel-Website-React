import { useEffect, useState } from "react";
import styled from "styled-components"

const Feedbacks = () => {
    const [index, setIndex] = useState(0);
    const images = ['Comments-img-1.png', 'Comments-img-2.png', 'Comments-img-3.png'];
    const comment = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi quaerat voluptatum earum sapiente voluptates.',
        'Lorem ipsum dolor sit amet consect et justo. Quos excepturi quaerat voluptatum earum sap sapiente voluptates in vul ridiculus mus mus mus mus.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas inventore quis eos sed hic qui, omnis iste, consequatur fugiat ex natus. Ullam, sequi?'
    ];
    const people = ['Christian Becker', 'Louis Hoffman', 'John Doe'];
    const ForwardComment = () =>{
        if(index<2){
            setIndex(index + 1);
        }else{
            setIndex(0);
        }
    }
    const PreviousComment = () =>{
        if(index>0){
            setIndex(index-1);
        }else{
            setIndex(2);
        }
    }
    // useEffect(()=>{
    //     setInterval(() => {
    //              ForwardComment();
    //          }, 4000);
    // })
        
  return (
    <>
        <CommentsContainer>
        <div className="headings">
            <p className="small">Promotion</p>
            <p className="big">See What Our Clients Say About us </p>
        </div>
        <div className="comments">
            <img src={`/images/${images[index]}`} alt="" />
            <div className="comment">
                <p className="com">{comment[index]}</p>
                <p className="person">{people[index]}</p>
            </div>
            <div className="arrows">
            <i className="fa fa-arrow-left left" onClick={PreviousComment}></i>
            <i className="fa fa-arrow-right right" onClick={ForwardComment}></i>
            </div>
        </div>
        </CommentsContainer>
    </>
  )
}
const CommentsContainer = styled.div`
    text-align: center;
    background-image: url('./images/carousel-img.png');
    background-size: cover;
    padding-top: 70px;
    padding-bottom: 70px;
    position: relative;
    .headings{
       
    }
    .small{
        color: #DF6951;
    text-align: center;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    }
    .big{
        margin-left: auto;
        margin-right: auto;
        width: 700px;
        color: #181E4B;
text-align: center;
font-family: Volkhov;
font-size: 50px;
font-style: normal;
font-weight: 700;
line-height: 71.042px; /* 142.085% */
    }

    .comments{
        margin-top: 40px;
        width: 35%;
        margin: 40px auto;
        transition: 0.5s ease;
        img{
            height: 120px;
            width: 120px;
            border-radius: 120px;
            border: 6px solid #fff;
        }
        .com{
            font-size: 12px;
            font-weight: 400;
            font-family: 'Volkhov';
            margin-top: 30px;
        }
        .person{
            margin-top: 30px;
            font-size: 23px;
            font-weight: 700;
        }
    }
    .arrows{
        margin-top: 40px;
    }
    .left{
        position: absolute;
        top: 400px;
        left: 300px;
        cursor: pointer;
        font-size: 30px;
    }
    .right{
        position: absolute;
        top: 400px;
        right: 300px;
        cursor: pointer;
        font-size: 30px;
    }

`
export default Feedbacks
