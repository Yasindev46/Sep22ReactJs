import React,{useContext} from 'react';
import { sendData } from './ContextBank';

export const AddAmount = () => {
    const rcv=useContext(sendData)
    return (
        <div style={{marginLeft:"20px"}}>
            <h1>Add Amount</h1>
            <div style={{width:"500px",backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"12px",}}>
                Account No:- <input type="text" value={rcv.accountNo}/> <br /><br />
                Account Type:- <input type="text" value={rcv.accountType}/><br /><br />
                Amount:- <input type="text" /><br /><br />
                  {rcv.accountBalance>500 ? <button>Add </button> :
                                            alert("Dont have Enough balance")}
            </div>
        </div>
    );
};