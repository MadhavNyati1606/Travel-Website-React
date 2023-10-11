import { Button } from './FirstHomeComponent'
import styled from 'styled-components'
const ThirdHomeComponent = () => {
  return (
    <>
      <FirstContainer>
        <div className="image-container">
          <img className = "main-image"src="/images/r-main-image.png" alt="img1" />
          <img className='top-images r-1' src="/images/r-1.png" alt="img2" />
          <img className='top-images r-2' src="/images/r-2.png" alt="img3" />
          <img className='top-images r-3' src="/images/r-3.png" alt="img4" />
        </div>
        <div className="r-container">
          <div className="r-type">
            <p>HONEYMOON SPECIALS</p>
          </div>
          <div className="r-heading">
            <p>Our Romantic Tropical Destinations</p>
          </div>
          <div className="r-info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta laboriosam mollitia officia adipisci ipsa nihil et ducimus, eaque voluptatem iste facere? Harum, quasi beatae nisi sit, pariatur accusantium tempora odit neque veniam, deserunt voluptatibus voluptatum saepe non at ducimus.</p>
          </div>
          <div className="r-button">
            <Button>View Packages</Button>
          </div>
        </div>
      </FirstContainer>
      <SecondContainer>
        <div className="favorite-bookings">
        <div className="f-type">
            <p>Fast & Easy</p>
          </div>
          <div className="f-heading">
            <p>Get Your Favorite Resort Bookings</p>
          </div>
          <div className="points">
            <div className="point">
              <img src="/images/Group 7.png" alt="" />
              <div className="point-info">
                <p className='point-heading'>Choose Destination</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iusto. Reprehenderit, quo inventore.</p>
              </div>
            </div>
            <div className="point">
              <img src="/images/Group 11.png" alt="" />
              <div className="point-info">
                <p className='point-heading'>Check Availability</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iusto. Reprehenderit, quo inventore.</p>
              </div>
            </div>
            <div className="point">
              <img src="/images/Group 12.png" alt="" />
              <div className="point-info">
                <p className='point-heading'>Let&apos;s Go</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iusto. Reprehenderit, quo inventore.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="f-images">
          <img className = "f-1" src="/images/Plane.png" alt="Plane" />
          <img className = "f-2" src="/images/Hawaii.png" alt="Hawaii" />
        </div>
      </SecondContainer>
    </>
  )
}
const FirstContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 170px auto;
  .image-container{
    position: relative;
    width: 50%;
    .top-images{
      position: absolute;
    }
    .r-1{
        width: 180px;
        height: 180px;
        border-radius: 180px;
        left: -30px;
        top: -0px;
      }
      .r-3{
        left: 110px;
        top: -70px;
      }
      .r-2{
        top: 360px;
        left: -130px;
      }
      .main-image{
        border-top-right-radius: 47%;
        border-top-left-radius: 47%;
      }
  }
  .r-container{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 60px;
    .r-type{
      color: #DF6951;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 1.8px;
    }
    .r-heading{
      color: #181E4B;
      font-size: 50px;
      font-family: Volkhov;
    }
    .r-info{
      font-size: 16px;
    }
  }
`
const SecondContainer = styled.div`
  width: 80%;
  margin: 150px auto;
  display: flex;
  .favorite-bookings{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    .f-type{
      color: #DF6951;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 1.8px;
    }
    .f-heading{
      color: #181E4B;
      font-size: 50px;
      font-family: Volkhov;
    }
    .points{
      display: flex;
      flex-direction: column;
      gap: 30px;
      .point{
        display: flex;
        gap: 20px;
        .point-heading{
          color: #181E4B;
          font-size: 16px;
        font-weight: 700;
        margin-bottom: 2px;
        }
      }
    }
  }
  .f-images{
    width: 50%;
    position: relative;
    .f-2{
      position: absolute;
      top: 220px;
      right: 230px;
    }
  }
`
export default ThirdHomeComponent

