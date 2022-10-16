import React,{useContext} from 'react';
import { sendData } from './ContextBank';

export const ViewAccount = () => {
    const recived=useContext(sendData)
    console.log(recived)
    return (
        <div  style={{marginLeft:"20px"}}>
            <h1>View Account</h1>
            <div style={{width:"500px",backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"12px",}}>
                <h3>Name:- {recived.name}</h3>
                <h3>Account No:- {recived.accountNo}</h3>
                <h3>Account Type:- {recived.accountType}</h3>
                <h3>Account Balance:- {recived.accountBalance}</h3>

            </div>

        </div>
    );
};