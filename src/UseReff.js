import React from 'react'
import { useRef,useState,useEffect } from 'react';

export default function UseReff() {
  const [color,setColor] = useState('white')
  useEffect(
    () => {
      document.body.style.background = color
    }
    
  )
const luckyName= useRef(null);
const [show, setShow] = useState(false);
const submitForm = (e) => {
    e.preventDefault();
const name = luckyName.current.value;
name=== "" ? alert("plz fill the data"): setShow(true);
}
return (
  <>
<div className="container d-flex justify-content-center justify-align-center my7">
<form action="" onSubmit={submitForm}>
<div>
<label htmlFor="luckyName">Enter your lucky Name </label>
<input type="text" id="luckyName" ref={luckyName}
/>
</div>
<br/>
<button className="btn btn btn-success">Submit</button>
</form>
  </div>
  
  <h1 className='container d-flex justify-content-center'> { show? `Your lucky name is ${luckyName.current.value}` : ""} </h1>
  </>
  )
}