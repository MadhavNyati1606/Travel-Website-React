import styled from 'styled-components';
import Navbar from './Navbar';
const FirstHomeComponent = () => {
  return (
    <>
    <NavbarContainer>
        <Navbar/>
        <ContentContainer>
        <div className="vector">
            <img src="/images/Vector1.png" alt="vector" />
        </div>
        <div className="text">
            <p>No matter where you&apos;re going to, we&apos;ll take you there</p>
        </div>
        <div className="info">
            <div className="info-text">
                <span><input type="text" placeholder='Where to?' className='input' /></span>
                <hr/>
                <span><input type="text" placeholder='Travel Type' className='input' /></span>
                <hr/>
                <span><input type="text" placeholder='Duration' className='input' /></span>
                <hr/>
                <Button>Submit</Button>
            </div>
        </div>
    </ContentContainer>
    </NavbarContainer>
    
    </>
  )
}
const NavbarContainer = styled.div`
    background: url('/images/woman.png');
    background-size: cover;
    height: 100vh;
`
const ContentContainer = styled.div`
    padding-left: 320px;
    padding-top: 108px;
    img{
        width: 78.356px;
        height: 15.671px;
    }
    .text{
        width: 39%;
    }
    .text p{
        color: #fff;
        font-size: 51px;
    }
    .info{
        display: flex;
        border-radius: 5.224px;
        background: rgba(243, 243, 243, 0.60);
        backdrop-filter: blur(12px);
        display: inline-block;
        padding: 15px 39px;
        margin-top: 40px;
        hr{
            color: black;
            height: 40px;
        }
    }
    .info-text {
        display: flex;
        align-items: center;
        gap: 40px;
        justify-content: space-around;
    }
    .info-text span{
        color: #fff;
        font-size: 19px;
        cursor: pointer;
        .input {
            background: transparent;
            border: none;
            padding: 7px;
            font-size: 20px;
            outline: none;
            width: 110px;
        }
        .input::placeholder{
            color: #fff;
        }
    }
`
export const Button = styled.button`
    width: 152px;
    cursor: pointer;
    height: 58px;
    background-color: #DF6951;
    border: none;
    border-radius: 7px;
    color: white;
    font-size: 17px;
    font-weight: 500;
`
export default FirstHomeComponent
