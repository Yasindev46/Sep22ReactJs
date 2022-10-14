import React, { useReducer } from 'react'
import "./Hooks.css"

export const initialState={
    countOne:0
}
export const reducer=(state,action)=>{
 if(action.type=="inc"){
    return {...state,countOne:state.countOne+action.data}
 }
 if(action.type=="dec"){
    return {...state,countOne:state.countOne-action.data}
 }
}
export default function HookUsereducer() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div className='mainDiv'>
        <h1>USEREDUCER HOOK</h1> <br /><br />
      <h1>{count.countOne}</h1>
      <button onClick={()=>dispatch({type:"inc",data:5})}>Inc</button>
      <button onClick={()=>dispatch({type:"dec",data:5})}>Dec</button>
    </div>
  )
}
