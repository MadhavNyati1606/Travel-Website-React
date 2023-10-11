import styled from "styled-components"

const AboutSecondComponent = () => {
  return (
    <>
        <ThirdContainer>
            <div className="image">
                <img src="/images/Polaroid-img.png" alt="" />
            </div>
            <div className="info">
                <div className="main-info">
                <div className="type">
                    <p>Trend</p>
                </div>
                <div className="topic">
                    <p>Our Popular Tour Plans</p>
                </div>
                <div className="para">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, rem, laboriosam illum accusamus recusandae sit est optio rerum magnam minima, eaque ratione corporis magni!</p>
                </div>
                </div>
                <div className="percentage">
                    <p>78%</p>
                    <img id = "img-1"src="/images/Ellipse 3.png" alt="" />
                    <p>55%</p>
                    <img id="img-2" src="/images/Ellipse 630.png" alt="" />
                    <p>30%</p>
                    <img id="img-3" src="/images/Ellipse 632.png" alt="" />
                </div>
            </div>
        </ThirdContainer>
    </>
  )
}
const ThirdContainer = styled.div`
    display: flex;
    width: 85%;
    margin: auto;
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
    .para{
        color: var(--black, #000);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px;
width: 500px;
    }
    .percentage{
        display: flex;
        gap: 70px;
        position: relative;
    }
    #img-1{
        position: absolute;
        top: -40px;
        left: -30px;
        fill: #FFF;
        /* box-shadow: 1px 4px 12px 0px rgba(0, 0, 0, 0.25) inset; */
        /* border-radius: 50%; */
    }
    #img-2{
        position: absolute;
        left: 280px;
        top: -40px;
        
    }
    #img-3{
        position: absolute;
        left: 515px;
        top: -35px;
    }
    .percentage p{
        margin-right: 90px;
        display: flex;
        gap: 30px;
        color: #525252;
text-align: center;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
    .main-info{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .info{
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 130px;
    }
    .image{
        width: 50%;
    }
`
export default AboutSecondComponent
