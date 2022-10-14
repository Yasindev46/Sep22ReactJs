import React, { useCallback, useState } from 'react'
import  TodoCallback  from './TodoCallback'         // import child Component

export const Hookcallback=()=> {
    const [count,setCount]=useState(0)
    const [todo,setTodo]=useState([])

    const handleCount=()=>{
        setCount(count+1)
    }

    const handleAdd=useCallback(()=>{           //use hook useCallback and give dependancy
       setTodo((prev)=>[...prev,"task"])
    },[todo])

  return (
    <div>
      <h1>UseCallback Hook</h1>

      <h1>{count}</h1>
      <button onClick={handleCount}>Counter</button>

      <TodoCallback todo={todo} handleAdd={handleAdd}/>     {/*tag child compoentn and pass props*/}
    </div>
  )
}
