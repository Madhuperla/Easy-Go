import Tkcontext from './Tkcontext'
import { useState } from "react";

const Tkstate=(props)=>{
  const host="http://localhost:8000"
    const data=[] 
        
    const[notes,setNotes]=useState(data);
    const getTicket=async()=>{
      const response = await fetch(`${host}/api/Ticket/fetchticket`, {
        method: "GET", 
        headers: { 
        
        },
      });
      const json=await response.json();
      
     console.log(json)
       setNotes(json);
       const newNotes = json.filter((note)=>  {
     
        let date = Date.now() - 30*86400000;
       
         return  new Date(note.on).getTime() >= date;
       
      })
       setNotes(newNotes);
  

    }
    //ADD NOTES
    const addTicket=async(from,to,on,time,count,contact)=>{
      const response = await fetch(`${host}/api/Ticket/addticket`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({from,to,on,time,count,contact}), 
      });
      const json =await response.json();
      console.log("added new note")
    //   const note= {

    //     "user": "64b5140dae488f7c407f270d",
    //     "ename": ename ,
    //     "college": college,
    //     "place": place,
    //     "description":description,
    //     "eon": eon,
    //     "tag": tag,
    //     "image": image,
    //     "contact": contact,
    //     "_id": "64b57ae83fab1bad8c83eb2b",
    //     "date": "2023-07-17T17:31:20.835Z",
    //     "__v": 0
    //   }
      setNotes(notes.concat(json));
    }
    //DELETE NOTES
    const deleteTicket=async(id)=>{
      console.log("deleted note by id ")
      const response = await fetch(`${host}/api/Ticket/deleteticket/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
         
      });
      const json= response.json(); 
      console.log(json)
      const newNotes=notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
    }
     //EDIT NOTES
     const editTicket=async(id,from,to,on,time,count,contact)=>{
      console.log("updating notes")
      const response = await fetch(`${host}/api/Ticket/updateticket/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
                },
        body: JSON.stringify({from,to,on,time,count,contact}), 
      });
      const json= await response.json(); 
      console.log(json)
      const newNotes=notes.filter((note)=>{
        if(note._id===id){
          note.from=from;
          note.to=to;
          note.time=time;
          note.count=count;
          note.contact=contact
        }
        return note})
        setNotes(newNotes)

     
     }
    
    return(
      <Tkcontext.Provider value={{notes,getTicket,addTicket,deleteTicket,editTicket}}>
        {props.children}
      </Tkcontext.Provider>
    )
}
export default Tkstate;