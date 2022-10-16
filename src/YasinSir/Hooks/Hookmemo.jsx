import React, { useState,useMemo } from 'react' //import useMemo from react

export const Hookmemo=()=> {
    const [count,setCount]=useState(0)
    const [todo,setTodo]=useState([])

const noRender=useMemo(()=>{                    // write useMemo to avoid rerender of elements
return <div> 
        <h1>New Count:- {count}</h1> 
    </div>
},[todo])

  return (
    <div>
      <h1>UseMemo Hook</h1>
      <h2>Original Count:- {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <br /><br />  

      {noRender}                              {/* write memoised function */}

        {todo.map((item)=>{
            return(
                <div>
                    <h1>{item}</h1>
                </div>
            )
        })}
        <button onClick={()=>setTodo([...todo,"Task"])}>Add Task</button>
    </div>
  )
}
