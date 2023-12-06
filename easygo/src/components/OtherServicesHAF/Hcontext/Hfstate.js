import Hfcontext from './Hfcontext'
import { useState } from "react";

const Hfstate=(props)=>{
  const host="http://localhost:8000"
    const data=[] 
        
    const[notes,setNotes]=useState(data);
    const getHelp=async()=>{
      const response = await fetch(`${host}/api/Help/fetchhelp`, {
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
    const addHelp=async(name,description,image,contact)=>{
      const response = await fetch(`${host}/api/Help/addhelp`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({name,description,image,contact}), 
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
    const deleteHelp=async(id)=>{
      console.log("deleted note by id ")
      const response = await fetch(`${host}/api/Help/deletehelp/${id}`, {
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
     const editHelp=async(id,name,description,image,contact)=>{
      console.log("updating notes")
      const response = await fetch(`${host}/api/Help/updatehelp/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
                },
        body: JSON.stringify({name,description,image,contact}), 
      });
      const json= await response.json(); 
      console.log(json)
      const newNotes=notes.filter((note)=>{
        if(note._id===id){
          note.name=name;
          note.description=description;
          note.image=image;
          note.contact=contact
        }
        return note})
        setNotes(newNotes)

     
     }
    
    return(
      <Hfcontext.Provider value={{notes,getHelp,addHelp,deleteHelp,editHelp}}>
        {props.children}
      </Hfcontext.Provider>
    )
}
export default Hfstate;