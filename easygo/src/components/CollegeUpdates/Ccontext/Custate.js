import CUcontext from './CUcontext'
import { useState } from "react";

const Custate=(props)=>{
  const host="http://localhost:8000"
    const data=[] 
        
    const[notes,setNotes]=useState(data);
    const getEvent=async()=>{
      const response = await fetch(`${host}/api/event/fetchevent`, {
        method: "GET", 
        headers: { 
        
        },
      });
      const json=await response.json();
      
     console.log(json)
       setNotes(json);
  
       const newNotes = json.filter((note)=>  {
     
        let date = Date.now() - 30*86400000;
       
         return  new Date(note.date).getTime() >= date;
       
      })
       setNotes(newNotes);

    }
    //ADD NOTES
    const addEvent=async(ename,description,place,eon,tag,college,image,contact)=>{
      const response = await fetch(`${host}/api/Event/addevent`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({ename,description,place,eon,tag,college,image,contact}), 
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
    const deleteEvent=async(id)=>{
      console.log("deleted note by id ")
      const response = await fetch(`${host}/api/Event/deleteevent/${id}`, {
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
     const editEvent=async(id,ename,description,place,eon,tag,college,image,contact)=>{
      console.log("updating notes")
      const response = await fetch(`${host}/api/Event/updateevent/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
                },
        body: JSON.stringify({ename,description,place,eon,tag,college,image,contact}), 
      });
      const json= await response.json(); 
      console.log(json)
      const newNotes=notes.filter((note)=>{
        if(note._id===id){
          note.ename=ename;
          note.description=description;
          note.place=place;
          note.eon=eon;
          note.tag=tag;
          note.college=college;
          note.image=image;
          note.contact=contact
        }
        return note})
        setNotes(newNotes)

     
     }
    
    return(
      <CUcontext.Provider value={{notes,getEvent,addEvent,deleteEvent,editEvent}}>
        {props.children}
      </CUcontext.Provider>
    )
}
export default Custate;