import React from 'react'
import styled from 'styled-components';
const Checkboxes = ({preference}) => {
    const arr = Array.from({length: 5}, (_,i)=> i);
  return (
    <Checkbox>
        {arr.map((value, index)=>(
            <>
            <div className="check">
                <div className="box">
                <input type="checkbox" key={value}/>
                <span className='checkmark'></span>
                </div>
            <p className='type'>{preference[index]}</p>
            </div>
            </>
        ))}
    </Checkbox>
  )
}
const Checkbox = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
    .check{
        display: flex;
        gap: 12px;
        align-items: center;
    }
    .type{
        font-size: 14px;
        font-weight: 400;
    }
    .box{
        position: relative;
    }
    input{
        -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 4px;
    }

    input:checked{
        
        background-color: #DF6951;
    }
    margin-bottom: 40px;
`
export default Checkboxes
