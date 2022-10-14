import { bgcolor } from '@mui/system'
import React, { useState } from 'react'
import "./Togle.css"

export const Toggle2=()=> {
    const [bgColor,setBgColor]=useState("green")
    const [status,setStatus]=useState("")
    const [toggle,setToggle]=useState(false)
    
    const chnageColor=(clr)=>{
        setBgColor(clr)
        if( bgColor=="red"){
            setStatus("STOP")
        }else if(bgColor=="yellow"){
            setStatus("WAIT")
        }else {
            setStatus("GO")
        }
    }
  return (
    <div className='boxNew1'>
      <button onClick={()=>chnageColor("green") } >Green</button>
      <button onClick={()=>chnageColor("yellow")} >Yellow</button>
      <button onClick={()=>chnageColor("red")} >Red</button>
      <button onClick={()=>setToggle(!toggle)}>{toggle?"Show":"Hide"}</button>
  
      <div className='div2' style={{backgroundColor:bgColor,display:toggle?"none":""}}></div>
      <h1 style={{display:"inline-block"}}>{status}</h1>
    </div>
  )
}
