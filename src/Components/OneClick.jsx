import React, { useState } from 'react'
import "./OnClick.css"

export const OneClick=()=> {
    const [isshow,setIsshow]=useState(false)
  return (
    <div>
      <button className='btn' onClick={()=>setIsshow(!isshow)}>Show</button>
      <div  className={isshow ?'box1':""}></div>
      <div className={isshow ?'box2':""}></div>
      <div className={isshow ?'box3':""}></div>
      <div className={isshow ?'box4':""}></div>
    </div>
  )
}
