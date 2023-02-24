import React from 'react'
import { useState, useEffect } from 'react'
const colors = {
  White: '#ffffff',
  Sky: '#00bfff',
  LightGreen: '#a2ccb6',
  DarkGreen: '#006400',
  LightBrown: '#fceeb5',
  Brown: '#a52a2a',
  Beige: '#f5f5dc' 
}

export default function UseEffect() {
    const [color, setColor] = useState(colors.white)
    useEffect(
      () => {
        document.body.style.background = color
      }
      
    )


    const changeColor=(e)=>{
      setColor(e.target.value);
      

    }
    return(
<>
<div className='container d-flex justify-content-center '>
        <select className="btn btn-secondary dropdown-toggle" value={color} onChange={changeColor}>
        <option className="dropdown-item" value={colors.White}>White</option>
          <option className="dropdown-item" value={colors.Sky}>Sky</option>
          <option className="dropdown-item" value={colors.LightGreen}>LightGreen</option>
          <option className="dropdown-item" value={colors.DarkGreen}>DarkGreen</option>
          <option className="dropdown-item" value={colors.LightBrown}>LightBrown</option>
          <option className="dropdown-item" value={colors.Brown}>Brown</option>
          <option className="dropdown-item" value={colors.Beige}>Beige</option>
        </select>
</div>
        <h1 className='container d-flex flex-direction: column justify-content-center'>{color}</h1>
</>
    )
}
