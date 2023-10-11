import styled from 'styled-components'
import { Button } from './FirstHomeComponent';
const FourthHomeComponent = () => {
  return (
    <>
        {/* <ImageComponent> 
            <img src="/images/Liberty.png" alt="" />
            <p>Let&apos;s Make Your Next Holiday Amazing</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="313" height="38" viewBox="0 0 313 38" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M236.065 9.85704C192.36 6.08905 179.848 5.18085 155.509 4.01086C130.287 2.79837 112.203 2.28073 83.4615 1.9486C76.7986 1.87161 69.671 1.72057 61.3214 1.47929C30.6495 0.592914 24.6666 0.569009 14.6533 1.2921C9.69197 1.65055 5.41525 1.81687 3.03433 1.74441C0.91753 1.67981 0.52774 1.73056 0.49436 2.07493C0.464862 2.37926 3.80297 2.97196 5.65828 2.99169C6.32314 2.99896 8.12303 3.03323 9.65815 3.06826C11.1933 3.1031 14.5769 3.12526 17.1772 3.11744C23.3005 3.09876 26.2308 3.18976 36.6996 3.72361C54.2988 4.6211 67.6096 5.13447 83.9808 5.54718C90.014 5.6992 98.0247 5.90113 101.782 5.99581C130.281 6.71372 165.027 8.25864 186.206 9.74977C211.907 11.5589 291.549 18.6756 290.157 19.0384C289.605 19.1823 280.357 19.7538 274.824 19.9861C269.742 20.1995 261.266 20.3963 250.848 20.5427C245.908 20.6124 239.127 20.7141 235.779 20.769C223.203 20.9754 219.063 21.0162 211.931 21.0048C179.072 20.9522 157.303 21.5718 126.909 23.4244C108.842 24.5254 93.944 26.3558 77.2086 29.5305C67.6937 31.3355 66.7456 31.728 67.4877 33.5557C67.9707 34.7449 72.6252 35.3442 82.1211 35.4394C99.4747 35.6138 115.758 36.0228 131.508 36.6798C141.386 37.092 142.697 37.1275 152.769 37.2572C156.531 37.3058 163.026 37.4731 167.202 37.6295L174.795 37.9137L164.778 36.7648C149.599 35.0236 133.287 33.4588 127.888 33.2261C110.012 32.4556 100.268 32.2516 84.3138 32.3139C80.5111 32.3288 77.3071 32.299 77.1936 32.2478C76.0996 31.7526 101.989 28.3813 114.278 27.4189C142.017 25.2461 170.45 24.3748 214.017 24.3621C217.996 24.361 225.989 24.2895 231.781 24.2036C237.572 24.1174 246.7 23.9828 252.066 23.9042C272.719 23.6018 278.889 23.3415 298.847 21.9311C311.629 21.0276 311.698 21.016 312.176 19.6533C312.702 18.1552 311.762 17.3611 308.895 16.8823C306.171 16.4272 254.83 11.4748 236.065 9.85704ZM175.624 37.8378C175.858 37.9075 176.202 37.9391 176.389 37.908C176.577 37.8769 176.386 37.8197 175.965 37.7811C175.544 37.7425 175.391 37.7681 175.624 37.8378Z" fill="white"/>
            </svg>
        </ImageComponent> */}
        <SecondImageComponent>
            <div className="left-container">
                <div className="explore-info">
                    <p className='ex-type'>PROMOTION</p>
                    <p className='ex-heading'>Explore Nature</p>
                    <Button className='btn'>View Packages</Button>
                </div>
            </div>
            <div className="right-container">
                <div className="explore-info">
                    <p className='ex-type'>PROMOTION</p>
                    <p className='ex-heading'>Explore Cities</p>
                    <Button className='btn'>View Packages</Button>
                </div>
            </div>
        </SecondImageComponent>
    </>
  )
}
const SecondImageComponent = styled.div`
    display: flex;
    height: fit-content;
    margin-top: 70px;
    margin-bottom: 120px;
    /* position: relative; */
    .ex-type{
        font: 10px;
        letter-spacing: 1.8px;
        color: #FFEFEC;
        font-weight: 700;
    }
    .btn{
        margin-bottom: 30px;
        background-color: transparent;
        border: 1px solid #fff;
    }
    .btn:hover{
        background-color: #DF6951;
        border: none;
    }
    .ex-heading{
        color: #fff;
        font-family: Volkhov;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
    }
    .explore-info{
        margin-top: 130px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .left-container{
        background-image: url('/images/left-img.png');
        background-size: cover;
        width: 50%;
        text-align: center;
    }
    .right-container{
        background-image: url('/images/right-img.png');
        background-size: cover;
        width: 50%;
        text-align: center;
    }
`

const ImageComponent = styled.div`
position: relative;
    img{
        width: 100%;
    }
    p{
        width: 560px;   
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        top: 135px;
        left: 388px;
        color: white;
        font-size: 50px;
        font-weight: 700;
    }
    svg{
        position: absolute;
        top: 249px;
        left: 578px;
    }
`
export default FourthHomeComponent
