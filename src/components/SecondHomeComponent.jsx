import styled from "styled-components"

const SecondHomeComponent = () => {
  return (
    <>
        <PartnersComponent>
            <p>Fly Emirates</p>
            <p>trivago</p>
            <p>airbnb</p>
            <p>turkish airlines</p>
            <p>SWISS</p>
        </PartnersComponent>
        <Category>
            <div className="category">
                <p>CATEGORY</p>
            </div>
            <div className="heading">
                <p>We Offer Best Services</p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src="/images/tour-guide 1.png" alt="" />
                    <h3>Guided Tours</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, maiores.</p>
                </div>
                <div className="card">
                    <img src="/images/travelling 1.png" alt="" />
                    <h3>Best Flights Operations</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, maiores.</p>
                </div>
                <div className="card">
                    <img src="/images/hands 1.png" alt="" />
                    <h3>Religious Tours</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, maiores.</p>
                </div>
                <div className="card">
                    <img src="/images/medical-team 1.png" alt="" />
                    <h3>Medical Insurance</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, maiores.</p>
                </div>
            </div>
        </Category>
    </>
  )
}
const Category = styled.div`
align-items: center;
margin-top: 80px;
    .category {
        text-align: center;
        color: #DF6951;
    }
    .heading{
        text-align: center;
        color: #181E4B;
        margin-top: 30px;
        p{
            font-size: 50px;

        }
    }
    .cards {
       display: flex;
       margin-top: 75px;
       justify-content: space-between;
       width: 80%;
       margin: auto;
       padding-top: 100px;
       gap: 50px;
       .card{
        text-align: center;
        img{
            width: 92px;
            height: 92px;
        }
        h3{
            font-size: 20px;
            margin-top: 20px;
        }
        p{
            color: var(--TEXT-CLR, #5E6282);
            font-size: 16px;
            margin-top: 20px;
            font-weight: 500;
        }
       }
    }
`
const PartnersComponent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 45px 171px;
    background-color: #F7F7F7;
    gap: 171px;
    p{
        opacity: 0.5;
        width: 165px;
        font-size: 25px;
    }
` 
export default SecondHomeComponent
