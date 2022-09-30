import React,{useState} from "react";
import "./Todo.css"

export const Todolist = () => {
   const [text,setText]=useState("")
   const [list,setList]=useState([])
   const [isEdite,setIsEdite]=useState(false)

   const handleAdd=()=>{
    text!="" && setList([...list,text])
    setText("")
   }

   const handleDelete=(ind)=>{
    console.log(ind);
    const result=list.filter((ele,i)=>i!=ind)
    setList(result)
   }

   const handleU=(ind)=>{
     console.log(ind);
     list.splice(ind,1,text)
     setIsEdite(false)
   }

    const handleEdite=(item)=>{
      setIsEdite(true)
      setText(item)
    }

  return (
    <div className="Todos">
      <h1 style={{display:"block"}}>TODO LIST</h1>
      
      <input type="text" value={text} placeholder="add new Task" onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleAdd} className="addbtn">Add</button>

      {list.map((item,ind)=>{
        return(
          <div >
                  <h1>{item} </h1>
                  <button onClick={()=>handleDelete(ind)}  className="delbtn">Delete</button>
                  <button onClick={()=>handleEdite(item)} className="editbtn" style={{height:isEdite?"40px":"",display:isEdite?"none":"inline-block"}}>Edit</button>
                  <button onClick={()=>handleU(ind)} className="updtbtn" style={{display:isEdite?"inline-block":"none", height:isEdite?"40px":""}}>Update</button>
           </div>
        )
      })}
      

      
    </div>
  );
};
