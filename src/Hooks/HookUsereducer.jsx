import React, { useReducer } from 'react'
import "./Hooks.css"

export const initialState={
    countOne:0,
    countTwo:10
}
export const reducer=(state,action)=>{
 if(action.type=="inc"){
    return {...state,countOne:state.countOne+action.data}
 }
 if(action.type=="dec"){
    return {...state,countOne:state.countOne-action.data}
 }
 if(action.type=="inc2"){
    return {...state,countTwo:state.countTwo+action.data}
 }
 if(action.type=="dec2"){
    return {...state,countTwo:state.countTwo-action.data}
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
      <h1>{count.countTwo}</h1>
      <button onClick={()=>dispatch({type:"inc2",data:5})}>Inc</button>
      <button onClick={()=>dispatch({type:"dec2",data:5})}>Dec</button>
    </div>
  )
}
