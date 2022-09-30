import React, { useState } from "react"
import { bikesdata } from "./data"

export const Mapproducts=()=>{
const [alldata,setAlldata]=useState(bikesdata)

    const array1=[10,20,30,"ABC",90]
    const [array2,setArray2]=useState(["Adidas","Reebok","Nike"])
    
    const [students,setStudents]=useState(
    [{name:"PDAC",
    city:"Nanded",
    availableSeat:true,
    fees:10000},

    {name:"GOPDAC",
    city:"Pune",
    availableSeat:false,
    fees:5000},

    {name:"GOPDAC",
    city:"Pune",
    availableSeat:false,
    fees:5000},
])

    const [text,setText]=useState("")
    const handleAdd=()=>{
        setArray2([text,...array2])
        console.log(array2)
        array1.push(text)
    }

return(
        <>
          <h1>Hello</h1>
          <div>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            <h1>{text}</h1>
          </div>

{/* <h1>Mapping on Array of Number</h1>
          <div style={{display:"inline-block",border:"2px solid black",boxShadow:"5px 5px 5px black",width:"200px",textAlign:"center"}}>
          {array1.map((item)=>{
            return(
                <div >
                    <h1>{item}</h1>
                </div>
            )
          })}
          </div> */}

{/* 
<h1>Mapping on Array of String</h1>
          <div style={{display:"inline-block",border:"2px solid black",boxShadow:"5px 5px 5px black",width:"200px",textAlign:"center",backgroundColor:"yellow"}}>
          {array2.map((item)=>{
            return(
                <div >
                    <h1>{item}</h1>
                </div>
            )
          })}
          </div>*/}

{/* <h1>Mapping on Array of Object</h1> */}
<table>
  <tr>
    <th>Name</th>
    <th>City</th>
    <th>Fees</th>
    </tr>
    {students.map((item)=>{
            return(
              <tr>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.fees}</td>
                </tr>
            )
          })} 


</table>
          {students.map((item)=>{
            return(
                <div style={{border:"2px solid black",width:"200px",float:"left",marginLeft:"10px"}}>
                    {console.log(item)}
                    <h1>{item.name}</h1>
                    <h1>{item.city}</h1>
                    <h1>{item.fees}</h1>
                </div>
            )
          })} 


        </>
    )
}