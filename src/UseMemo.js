import React from 'react'
import { useState, useMemo,useEffect} from 'react';

export default function UseMemo() {
      useEffect(
        () => {
          document.body.style.background = 'white'
        }
        
      )
    const [myNum, setMyNum] = useState(0);
    const [show, setShow]=useState(false);
    const getValue = ()=> {
    return setMyNum(myNum + 1);
    };
    const countNumber = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num;
    };

    const CheckData = useMemo(()=>{return countNumber(myNum);},[myNum]);

    
  return (
   <>
<h3 className='container d-flex flex-direction: column justify-content-center'> My new number {CheckData} </h3>
   <div className='container d-flex flex-direction: column justify-content-center'>
<button className='btn btn btn-danger' onClick={getValue}>
Counter
</button>
   </div>
   <div className='container d-flex flex-direction: column justify-content-center'>
<button className='btn btn btn-primary' onClick={()=>setShow(!show) }>
{show? "You clicked me" : "Click me plz"}
</button>
   </div>
   </>
  )
}
