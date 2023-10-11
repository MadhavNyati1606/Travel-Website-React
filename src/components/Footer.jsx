import styled from 'styled-components'
import { Button } from './FirstHomeComponent'
import { Link } from 'react-router-dom'
import Feedbacks from './Feedbacks'
const Footer = () => {
  return (
    <>
    
        <FooterContainer>
            <div className="first-col">
                <div className="first-heading">
                    <p>Travel</p>
                </div>
                <div className="first-info">
                    <p>Travel helps companies manage payments easily</p>
                </div>
            </div>
            <div className="second-col">
                <div className="second-heading">
                    <p>Company</p>
                </div>
                <div className="second-points">
                    <p className='about-link'><Link to='/about'>About Us</Link></p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Pricing</p>
                </div>
            </div>
            <div className="second-col">
            <div className="second-heading">
                    <p>Destinations</p>
                </div>
                <div className="second-points">
                    <p>Maldives</p>
                    <p>Los Angeles</p>
                    <p>Las Vegas</p>
                    <p>Toronto</p>
                </div>
            </div>
            <div className="fourth-col">
            <div className="second-heading">
                    <p>Join Our Newsletter</p>
                </div>
                <div className="submit">
                    <input type="text" placeholder='Your email address'/>
                    <Button>Subscribe</ Button>
                </div>
                <div className="line">
                    <p>* Will send you weekly updates for your better tour packages</p>
                </div>
            </div>
        </FooterContainer>
    </>
  )
}
const FooterContainer = styled.div`
    margin: 0px auto;
    display: flex;
    background-color: #FAF3F0;
    justify-content: space-between;
    padding: 42px 32px;
    .first-col{
        display: flex;
        flex-direction: column;
        .first-heading{
            color: #181E4B;
            font-family: Volkhov;
            font-size: 31.622px;
            font-weight: 700;
        }
    }
    .about-link{
        a{
            color: black;
            text-decoration: none;
        }
    }
    .second-heading{
            color: #181433;
            font-size: 21px;
            font-weight: 700;
        }
        .second-points{
            
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    .second-col{
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
    .fourth-col{
        display: flex;
        flex-direction: column;
        gap: 18px;
        .submit{
            height: 35px;
        }
        input{
            padding: 12px;
            background-color: #EEF;
            height: 100%;
            border: none;
            outline: none;
        }
        .line{
            color: #181433;
            font-size: 16px;
            font-weight: 500;
            margin-top: 20px;
            width: 390px;
        }
    }
`
export default Footer
