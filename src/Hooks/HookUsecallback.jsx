import React, { useCallback, useState } from 'react'
import "./Hooks.css"
import Todoitem from './Todoitem'

export default function HookUsecallback() {
    const [count,setCount]=useState(0)
    const [todo,setTodo]=useState([])

const handleCount=()=>{
    setCount(count+1)
}
const handleAdd= useCallback(()=>{
    setTodo((prev)=>[...prev,"New Task"])
},[todo])

  return (
    <div className='mainDiv'>
    <br /><br />
        <Todoitem todo={todo} handleAdd={handleAdd}/>
    <hr />
        <h1>{count}</h1>
        <button onClick={handleCount}>Counter</button>  
    </div>
  )
}

