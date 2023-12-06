import LFcontext from './LFcontext'
import { useState } from "react";

const Lfstate=(props)=>{
  const host="http://localhost:8000"
    const data=[] 
        
    const[notes,setNotes]=useState(data);
    const getItem=async()=>{
      const response = await fetch(`${host}/api/Item/fetchitem`, {
        method: "GET", 
        headers: { 
        
        },
      });
      const json=await response.json();
      
     console.log(json)
       setNotes(json);
       const newNotes = json.filter((note)=>  {
     
        let date = Date.now() - 20*86400000;
       
         return  new Date(note.date).getTime() >= date;
       
      })
       setNotes(newNotes);
  

    }
    //ADD NOTES
    const addItem=async(name,description,place,status,on,image,contact)=>{
      const response = await fetch(`${host}/api/Item/additem`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({name,description,place,status,on,image,contact}), 
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
    const deleteItem=async(id)=>{
      console.log("deleted note by id ")
      const response = await fetch(`${host}/api/Item/deleteitem/${id}`, {
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
     const editItem=async(id,name,place,description,status,on,image,contact)=>{
      console.log("updating notes")
      const response = await fetch(`${host}/api/Item/updateitem/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
                },
        body: JSON.stringify({name,place,description,status,on,image,contact}), 
      });
      const json= await response.json(); 
      console.log(json)
      const newNotes=notes.filter((note)=>{
        if(note._id===id){
          note.name=name;
          note.description=description;
          note.place=place;
          note.status=status;
          note.on=on;
          note.image=image;
          note.contact=contact
        }
        return note})
        setNotes(newNotes)

     
     }
    
    return(
      <LFcontext.Provider value={{notes,getItem,addItem,deleteItem,editItem}}>
        {props.children}
      </LFcontext.Provider>
    )
}
export default Lfstate;