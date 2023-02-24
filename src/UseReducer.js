import React, { useState,useReducer,useEffect} from 'react'
const initialState = 0;
const reducer = (state, action) => {
if(action.type=== "Increment"){
    return state+1;

}
else{
    return state-1;

}
return state;
}



export default function UseReducer() {
    const [color,setColor] = useState('white')
    useEffect(
      () => {
        document.body.style.background = color
      }
      
    )
    const [state, dispatch] = useReducer(reducer, initialState);
    return (  
        <>
           <h1 className='container d-flex flex-direction: column justify-content-center'>{state}</h1>
        <div className='container d-flex flex-direction: column justify-content-center'>
        <div>
            <button className='btn btn btn-success' onClick={()=>dispatch({type: "Increment"})}> + </button>
            <button className='btn btn btn-danger' onClick={()=>dispatch({type: "Decrement"})}> - </button>
        </div>
        </div>
        </>  
  )
}