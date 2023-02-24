import React from 'react'
import { useState,useEffect } from 'react'

export default function UseState() {
  
    useEffect(
      () => {
        document.body.style.background = 'white'
      }
      
    )


  const [name, setName] = useState("")
  const [lname, setlname] = useState("")
  const [comment, setComment] = useState("")
  
  return (
      <>      
        <label>Name</label><br/>
        <input onChange={(e) => setName(e.target.value)}  /><br/><br/>
        <label>LName</label><br/>
        <input onChange={(e) => setlname(e.target.value)}  /><br/><br/>
                
        <label htmlFor="comment">Comment</label><br/>
        <textarea id="comment" onChange={(e) => setComment(e.target.value)} style={{width: "400px"}}></textarea>
        
        <h2>Preview</h2>
        <table border='1'>
          <tr border='1'>
            <td>Username</td>
            <td>LName</td>
            <td>Comment</td>
          </tr>
          <tr >
            <td>{name}</td>
            <td>{lname}</td>
            <td>{comment}</td>
          </tr>
        </table>
      
      </>)
}

