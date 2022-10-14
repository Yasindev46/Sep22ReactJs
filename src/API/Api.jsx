import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {DynamicTable} from "./DynamicTable"

export const Api=()=> {
    const [data,setData]=useState([])

    const getData=async()=>{
        const result= await axios.get("https://reqres.in/api/products")
        setData([...result.data.data])
        console.log("==>",result.data.data)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
      <DynamicTable data={data}/>
      <table>
        <thead>
            <tr>
                {data.map((item)=>{
                    return(
                    <th>{item.name}</th>

                    )
                })}
            </tr>
        </thead>
      </table>
    </div>
  )
}
