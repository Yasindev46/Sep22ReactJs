// import "./styles.css";
import React from "react";
import { useState } from "react";
import "./AdvanceTodo.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

export const TodoAdvance =()=> {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [newText, setNewText] = useState(null);
  const [isEdite, setisEdite] = useState(false);

  const handleAdd = () => {
    if(!text){
        alert("plz Enetr Text")
    }
    else if(text && isEdite){
        setList(list.map((elem)=>{
            if(elem.id===newText){
                return {...elem,name:text}
            }
            return elem
        }))
    setText("")
    setisEdite(false)
    setNewText(null)
    setTimeout(() => {
      alert("Updated Successfully")
    }, 500);
    }
    else {
        const alldata={id:new Date().getTime().toString(),name:text}
        console.log("===>=>",alldata)
        setList([...list, alldata]);
        setText("")
    }
    console.log(list)
  };

  const handleDelete = (id) => {
    const result = list.filter((item, i) => item.id != id);
    setList(result);
  };

  const handleUpdate = (id) => {
    const newItem=list.find((elem)=>elem.id===id)
    setText(newItem.name)
    setisEdite(true)
    setNewText(id)
  };
  return (
    <div >
      <h1 className="head">Todo List</h1>
      <div className="Box2">
      <input
        type="text"
        style={{backgroundColor:isEdite?"yellow":"transparent",fontWeight:"bolder",fontSize:"20px",width:"240px"}}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
     {isEdite?<LibraryAddCheckIcon sx={{color:"green",height:"45px",width:"45px",top:"18px",position:"relative"}}onClick={handleAdd}/>
      : <LibraryAddIcon sx={{color:"blue",height:"45px",width:"45px",top:"18px",position:"relative"}}onClick={handleAdd}/>}
              
      {list.map((item) => {
        return (
          <div className="item">
            <h2 className="itemH2">{item.name}</h2>
            <div style={{float:"right", position:"relative",bottom:"45px",right:"15px"}}>
            <DeleteForeverIcon sx={{color:"red",height:"35px",width:"35px"}} onClick={() => handleDelete(item.id)}/>
            <BorderColorIcon  sx={{ color:"white", height:"35px",width:"35px"}} onClick={() => handleUpdate(item.id)}/>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}