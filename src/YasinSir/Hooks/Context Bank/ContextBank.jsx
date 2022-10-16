import React,{createContext} from 'react'
import { BankDashboard } from './BankDashboard'

export const sendData=createContext()

export const ContextBank=()=> {
const account={name:"Raj Malhotra",
                age:25,
                accountNo:123000, 
                accountType:"Saving",
                accountBalance:20000,
                address:{street:"lane no 15", 
              area:"Peer Burhan", 
              city:"Nanded",
              pin:431605},
                contactNo:954545459
            }

  return (
    <div>
        <h1>Welcome to Bank</h1>
        <sendData.Provider value={account}>
            <BankDashboard/>
        </sendData.Provider>
        
    </div>

  )
}