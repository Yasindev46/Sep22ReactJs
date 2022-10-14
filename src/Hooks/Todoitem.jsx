import React, { memo } from 'react'

 function Todoitem({todo,handleAdd}) {
   console.log("i render")
  return (
    <div >
        <h1>My Todo List</h1>
        <hr />
        {todo.map((item,id)=>{
            return(
                <h2>{item+id}</h2>
            )
        })}
      <button onClick={handleAdd} >Add</button>
    </div>
  )
}
export default memo(Todoitem)