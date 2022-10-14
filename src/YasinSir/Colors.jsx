import React from "react"
import { useState } from "react"
import "./Colors.css"

export const Colors=()=>{
    const [colorData,setColordata]=useState("")
    const [changeColor,setchangeColor]=useState("white")
    console.log(colorData)

    return(
        <div className="main1">
            <h1>Apply Color to Ball</h1>
            <input type="color" onChange={(e)=>setColordata(e.target.value)}/>
            <button onClick={()=>setchangeColor(colorData)} >Apply</button>
            <div className="ball" style={{backgroundColor:changeColor}}></div>
        </div>
    )
}