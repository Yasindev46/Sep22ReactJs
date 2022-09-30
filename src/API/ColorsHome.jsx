import React, { useEffect, useState } from "react";
import axios from "axios";

export const ColorsHome = () => {
  const [apidata, setApidata] = useState([]);
  const [newColor, setNewColor] = useState("gray");
  const [colorName,setColorName]=useState("")
  const [updateColor,setUpdateColor]=useState("")
  const [isedite,setIsedite]=useState(true)
  
  const getData = async () => {
    const allData = await axios.get("https://reqres.in/api/products");
    // console.log(allData.data.data);
    setApidata(allData.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlChange = (item) => {
    setNewColor(item.color);
    setColorName(item.name)
  };

  const handleUpdate=(item)=>{
    item.color=updateColor
    item.name=updateColor
    setIsedite(true)
  }

  return (
    <div style={{marginLeft:"10%"}}>
      <h1>Colors Selction From API</h1>
      <table border={"2px"}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Year</th>
          <th>Color</th>
        </tr>
        {apidata.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td onClick={() => handlChange(item)}>
                <div
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                  }}
                ></div>
              </td>
              {isedite?<td><button onClick={()=>setIsedite(false)}>Edite</button></td>
                      :<td ><input type="color" onChange={(e)=>setUpdateColor(e.target.value)} style={{
                        height: "50px",
                        width: "50px",
                        }}/></td> }
              {isedite?null:<td><button onClick={()=>handleUpdate(item)}>Update</button></td>}
            </tr>
          );
        })}
      </table>
      <div
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "10%",
          backgroundColor: newColor,
          position: "relative",
          left: "40%",
          bottom: "300px",
          textAlign:"center",
          display:"flex",
          justifyContent:"center",
          alignItem:"center"
        }}
      ><h5> Color:-{colorName}</h5></div>
    </div>
  );
};
