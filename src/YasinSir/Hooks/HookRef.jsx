import React,{useEffect, useRef, useState} from 'react'    //step 1- import useRef

export const HookRef=()=> {
  console.log("Ref Render")
    const in1=useRef()                          //step 2- assign a variable
    const upload1=useRef()
    const date1=useRef()
    const color1=useRef()

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

    const handlePlay=()=>{
      color1.current.play()
    }
    const handlePause=()=>{
      color1.current.pause()
    }
    useEffect(()=>{
      date1.current.focus()
    },[])
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
      <input type="file" ref={upload1} />
      <button onClick={handleUpload}>Upload</button>
      <br /><br />
      <hr />
      <input type="date" ref={date1} />
      <br /><br />
      <hr />
      <div style={{textAlign:"center"}}>
      <video src="Tom.mp4"  width="500px" height="300px" ref={color1} ></video>
      <br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  )
}

// Notes By Yasin Sir @ PickupBiz