// import "./styles.css";
import React from "react";
import { useState } from "react";

export const UpdateTodo =()=> {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleAdd = () => {
    setList([...list, text]);
    setText("")
  };

  const handleDelete = (ind) => {
    const result = list.filter((item, i) => i != ind);
    setList(result);
  };

  const handleComplete=(ind,item)=>{
    list.forEach((element,i) => i==ind?<h1 ><del> {item}</del></h1>:"");
    
    // setIsComplete(true)

  }
  const handleUpdate = (ind) => {
    // list.splice(ind, 1, newText);
    list[ind]=newText
    setIsUpdate(false);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      {list.map((item, ind) => {
        return (
          <div>
           {isComplete?<h1 ><del> {item}</del></h1>:<h1 > {item}</h1>} 
            <button onClick={() => handleDelete(ind)}>Delete</button>
            <button onClick={() => handleComplete(ind)}>Completed</button>
            <button onClick={() => setIsUpdate(true)}>Edit</button>
            {isUpdate? <input type="text" onChange={(e)=>setNewText(e.target.value)}/>:""}
            {isUpdate?<button onClick={() => handleUpdate(ind)}>Update</button>:""}
          </div>
        );
      })}
    </div>
  );
}