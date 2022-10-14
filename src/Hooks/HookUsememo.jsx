import React, { useEffect, useMemo, useState } from 'react'
import "./Hooks.css"

export default function HookUsememo() {
const [count,setCount]=useState(0)
const [name,setName]=useState("")
const [isUpdate,setIsUpdate]=useState(false)

// useEffect(()=>{
//     console.log("i render")
// },[])
const DoubleNum=complex(count)

const noRender=useMemo(()=>{
return <div>
        <h1> I Render {count} - {name}</h1>
       </div>

},[isUpdate])

  return (
    <div className='mainDiv'>
       <h1>USEMEMO HOOK</h1> <br /><br />
        {noRender}
        <h1>i render {count} </h1>
        <h1>Name- {name}</h1>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <button onClick={()=>setName("PDAC")}>Name</button>
        <button onClick={()=>setIsUpdate(true)}>isUpdate</button>
    </div>
  )
}
function complex(num){
    console.log(num)
    for(let i=0;i<100000000;i++){}
        return num*2
    
}