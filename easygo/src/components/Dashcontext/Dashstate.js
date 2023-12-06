import Dcontext from './Dcontext.js'
import { useState } from "react";

const Dstate=(props)=>{
  const host="http://localhost:8000"
    const data=[] 
        
    const[notes,setNotes]=useState(data);
    
    const getEvent=async()=>{
      const response = await fetch(`${host}/api/event/dashevent`, {
        method: "GET", 
        headers: { 
          "auth-token":localStorage.getItem('token')
        
        },
      });
      const json=await response.json();
      
     console.log(json)
       setNotes(json);
  
      //  const newNotes = json.filter((note)=>  {
     
      //   let date = Date.now() - 30*86400000;
       
      //    return  new Date(note.date).getTime() >= date;
       
      // })
      //  setNotes(newNotes);

    }
    const getTravel=async()=>{
      const response = await fetch(`${host}/api/Travel/dashtravel`, {
        method: "GET", 
        headers: { 
          "auth-token":localStorage.getItem('token')
        },
      });
      const json=await response.json();
      setNotes(json)
       console.log(json)
     
      // const newNotes = json.filter((note)=>  {
        
      //   let date = Date.now() - 30*86400000;
        
      //    return  new Date(note.on).getTime() >= date;
       
      // })
      //  setNotes(newNotes);
  

    }
    const getItem=async()=>{
      const response = await fetch(`${host}/api/Item/dashitem`, {
        method: "GET", 
        headers: { 
          "auth-token":localStorage.getItem('token')
        },
      });
      const json=await response.json();
      
     console.log(json)
       setNotes(json);
      //  const newNotes = json.filter((note)=>  {
     
      //   let date = Date.now() - 20*86400000;
       
      //    return  new Date(note.date).getTime() >= date;
       
      // })
      //  setNotes(newNotes);
  

    }
    const getTicket=async()=>{
      const response = await fetch(`${host}/api/Ticket/dashticket`, {
        method: "GET", 
        headers: { 
          "auth-token":localStorage.getItem('token')
        },
      });
      const json=await response.json();
      
     console.log(json)
       setNotes(json);
      //  const newNotes = json.filter((note)=>  {
     
      //   let date = Date.now() - 30*86400000;
       
      //    return  new Date(note.on).getTime() >= date;
       
      // })
      //  setNotes(newNotes);
  

    }
    const getHelp=async()=>{
      const response = await fetch(`${host}/api/Help/dashhelp`, {
        method: "GET", 
        headers: { 
          "auth-token":localStorage.getItem('token')
        },
      });
      const json=await response.json();
      
     console.log(json)
       setNotes(json);
      //  const newNotes = json.filter((note)=>  {
     
      //   let date = Date.now() - 30*86400000;
       
      //    return  new Date(note.date).getTime() >= date;
       
      // })
      //  setNotes(newNotes);
  

    }
  
    
    
    
    return(
      <Dcontext.Provider value={{notes,getEvent,getTravel,getHelp,getItem,getTicket}}>
        {props.children}
      </Dcontext.Provider>
    )
}
export default Dstate;