import { bgcolor } from '@mui/system'
import React, { useState } from 'react'
import "./Togle.css"

export const Toggle1=()=> {
    const [togle,setTogle]=useState(false)
    const [text,setText]=useState("")
     const handleClicked=(string1)=>{
        setText(string1)
    }   
  
  return (
    <div className='boxNew'>
      <button onClick={()=>setTogle(!togle) }> {togle?"Square":"Round"}</button>
      <button style={{backgroundColor:togle?"red":"green"}} onClick={()=>handleClicked("Pune")}>Pune</button>
      <button  onClick={()=>handleClicked("Nanded")}  >Nanded</button>
      <h1 style={{display:"inline-block"}}>{text}</h1>
      <div className={togle?"square":"round"} ></div>
    </div>
  )
}
