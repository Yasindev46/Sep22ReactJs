import React,{ useState } from 'react'
import {Tabs,Tab} from "@mui/material"
import { ViewAccount } from './ViewAccount '
import {ViewDetails} from './ViewDetails '
import { AddAmount } from './AddAmount '

export const BankDashboard=()=> {
    const [val,setVal]=useState("Account")

  return (
    <div>
       {/* <h1> Bank DashBoard</h1> */}
        <Tabs value={val} onChange={(e,val)=>setVal(val)} style={{backgroundColor:"yellow"}} >
             <Tab value="Account" label="View Account" style={{width:"150px"}}></Tab>
             <Tab value="Details" label="View Details" style={{width:"150px"}}></Tab>
             <Tab value="Addamount" label="Add Amount" style={{width:"150px"}}></Tab>
         </Tabs>

        {val=="Account" && <ViewAccount/>}
        {val=="Details" && <ViewDetails/>}
        {val=="Addamount" && <AddAmount/>}
    </div>
  )
}