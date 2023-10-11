import styled from 'styled-components'
import  NavBar  from './Navbar'
import Feedbacks from './Feedbacks'
import Footer from './Footer'
import { Button } from './FirstHomeComponent'
import AboutSecondComponent from './AboutSecondComponent'
const AboutFirstComponent = () => {
  return (
    <>
        <TopContainer>
            <NavBar/>
            <div className="text">
                <p className='small'>Read</p>
                <p className='big'>about us</p>
            </div>
        </TopContainer>
        <SecondContainer>
            <div className="left-container">
                <div className="type">
                    <p>Promotion</p>
                </div>
                <div className="topic">
                    <p>We Provide You Best Europe Sightseeing Tours</p>
                </div>
                <div className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione hic nobis minima odit non facilis corporis explicabo fuga exercitationem nam, molestias dignissimos quis, vel minus, eum pariatur in earum?
                </div>
                <Button>View Packages</Button>
            </div>
            <div className="right-container">
                <div className="image">
                    <img src="/images/About-page-second-img.png" alt="" />
                </div>
            </div>
        </SecondContainer>
        <AboutSecondComponent/>
        <Feedbacks/>
        <Footer/>
    </>
  )
}
const SecondContainer = styled.div`
    display: flex;
    width: 80%;
    margin: 100px auto;
    .type{
        color: #DF6951;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    }
    .topic{
        color: #181E4B;
font-family: Volkhov;
font-size: 50px;
font-style: normal;
font-weight: 700;
line-height: 71.042px;
    }
    .left-container{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        .info{
            color: var(--black, #000);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px;
width: 500px;
        }
    }
    .right-container{
        width: 50%;
    }
`
const TopContainer = styled.div`
    background-image: url('/images/about-navbar.png');
    background-size: cover;
    height: 100vh;
    .text{
        color: #fff;
        text-align: center;
        margin-top: 100px;
    }
    .small{
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 1.8px;
        text-transform: uppercase;
    }
    .big{
        font-size: 157px;
        font-family: 'Yesteryear';
    }
    
`
export default AboutFirstComponent
