import React,{memo} from 'react'             //import memo from react

const TodoCallback=({todo,handleAdd})=> {    //recive props from parent component
 console.log("render")
  return (
    <div>
      {todo.map((item)=>{
        return(
            <h1>{item}</h1>
        )
      })}
      <button onClick={handleAdd}>Task</button>
    </div>
  )
}
export default memo(TodoCallback)         //wrap component in memo