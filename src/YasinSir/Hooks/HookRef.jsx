import React,{useRef, useState} from 'react'    //step 1- import useRef

export const HookRef=()=> {
    const in1=useRef()                          //step 2- assign a variable
    const upload1=useRef()
    const [text,setText]=useState("")

    const handleFocus=()=>{
        in1.current.focus()
    }
    const handleEdit=()=>{
        in1.current.value="PDAC"
    }
    const handleClear=()=>{
        in1.current.value=""
    }
    const handleColor=()=>{
        in1.current.style.color="red"
        in1.current.style.fontWeight="bolder"
        in1.current.style.textAlign="center"
    }
    const handleUpload=()=>{
      upload1.current.click()
    }
  return (
    <div>
      <h1>UseRef Hook</h1>
       <input type="text" ref={in1}/>            {/* step 3- select element to refer*/}
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleColor}>Color</button>
      <br /><br />
      <hr />
      <input type="file" ref={upload1} style={{display:"none"}}/>
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}
