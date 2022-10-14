import { Grid } from "@mui/material";
import React, { useState } from "react";

export const Fullname = () => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [fullname,setFullname]=useState({});
  const [finished,setFinished]=useState(false);

  const handleLname=(e)=>{
    setLname(e.target.value)
    if(lname.length>2){
      setFinished(true)
    }else{
      setFinished(false)
    }
    }
  
  const handleName=()=>{
    setFullname({Fname:fname,Mname:mname,Lname:lname})
  }

  return (
    <div style={{marginLeft:"20%",marginTop:"10%"}}>
        <h1 style={{marginLeft:"120px"}}> Display Fullname</h1>
    <Grid container spacing={2}>
      <Grid item xs={6} >
        <input type="text" placeholder="First Name"  onChange={(e) => setFname(e.target.value)} />
        <input type="text" placeholder="Middel Name" onChange={(e) => setMname(e.target.value)} />
        <input type="text" placeholder="Last Name" onChange={(e)=>handleLname(e)} />
      </Grid>
      <Grid item xs={4} >
      <button onClick={handleName} style={{backgroundColor:finished?"red":"",color:finished?"black":""}}>Show</button>
      </Grid>
    </Grid>
      
    <Grid>
      <Grid item xs={12}>
        <h1> Full name:- {fname} {mname} {lname}</h1>
        <h1> Full name:- {fullname.Fname} {fullname.Mname} {fullname.Lname}</h1>
      </Grid>
    </Grid>
    </div>
  );
};
