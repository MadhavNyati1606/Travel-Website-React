import { useState } from 'react'
import './Packages.css';
import { Button } from './FirstHomeComponent';
import Checkboxes from './Checkboxes';
import styled from 'styled-components';
const Packages = ({onClose}) => {
  const [input1, setInput1] = useState(null);

  const handleChange = (e) => {
      setInput1(e.target.value);
  }
  return (
    <>
        <div className="overlay">
        <div className="overlay_background" onClick={onClose}/>
        <div className="overlay_container">
          <div className="overlay_controls">
            <button className='overlay_close' type='button' onClick={onClose}></button>
          </div>
          <div className="overlay_content">
            <div className="heading">
              <p>Build Your Own Package</p>
            </div>
            <div className="custom-input">
              <div className="label">
                <label htmlFor="" className='input-label'>Enter Destination (country, region or city)</label>
              </div>
              <div className="input-div">
                <input type="text" onChange={handleChange} className='input-field'/>
                </div>
                </div>
                <div className="custom-input">
              <div className="label">
                <label htmlFor="" className='input-label'>Date Range (Start Date - End Date)</label>
              </div>
              <div className="input">
                <input type="text" onChange={handleChange} className='input-field'/>
                </div>
                </div>
                <div className="custom-input">
              <div className="label">
                <label htmlFor="" className='input-label'>No. of Guests</label>
              </div>
              <div className="input">
                <input type="text" onChange={handleChange} className='input-field'/>
                </div>
                </div>
                <div className='checks'>
                  <Checkboxes preference={['Culture', 'Romantic', 'Shopping', 'Traditions', 'Guide']}/>
                  <Checkboxes preference={['Outdoors', 'Religious', 'Business', 'Walks', 'Healthcare']}/>
                  <Checkboxes preference={['Relaxing', 'Hiking', 'Museums', 'Fishing', 'Cruise']}/>
                </div>
                <div className="button-packages">
                  <Button onClick={onClose}>Build Package</Button>
                </div>
                
          </div>
        </div>
      </div>
    </>
  )
}

export default Packages
