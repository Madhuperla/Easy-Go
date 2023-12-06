import TBcontext from './TBcontext'
import { useState } from "react";

const Tbstate=(props)=>{
  const host="http://localhost:8000"
    const data=[] 
        
    const[notes,setNotes]=useState(data);
    const getTravel=async()=>{
      const response = await fetch(`${host}/api/Travel/fetchtravel`, {
        method: "GET", 
        headers: { 
        
        },
      });
      const json=await response.json();
      setNotes(json)
       console.log(json)
     
      const newNotes = json.filter((note)=>  {
        // let v=false
        let date = Date.now() - 30*86400000;
        // if(new Date(note.date).getTime() >= date)
        // v=true;
         return  new Date(note.on).getTime() >= date;
       
      })
       setNotes(newNotes);
  

    }
    //ADD NOTES
    const addTravel=async(from,to,on,vtype,vnumber,fare,buddies,image,contact)=>{
      const response = await fetch(`${host}/api/Travel/addtravel`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({from,to,on,vtype,vnumber,fare,buddies,image,contact}), 
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
    const deleteTravel=async(id)=>{
      console.log("deleted note by id ")
      const response = await fetch(`${host}/api/Travel/deletetravel/${id}`, {
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
     const editTravel=async(id,from,to,on,vtype,vnumber,fare,buddies,image,contact)=>{
      console.log("updating notes")
      const response = await fetch(`${host}/api/Travel/updatetravel/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
                },
        body: JSON.stringify({from,to,on,vtype,vnumber,fare,buddies,image,contact}), 
      });
      const json= await response.json(); 
      console.log(json)
      const newNotes=notes.filter((note)=>{
        if(note._id===id){
          note.from=from;
          note.to=to;
          note.on=on;
          note.vtype=vtype;
          note.vnummber=vnumber;
          note.fare=fare;
          note.buddies=buddies;
          note.image=image;
          note.contact=contact
        }
        return note})
        setNotes(newNotes)

     
     }
    
    return(
      <TBcontext.Provider value={{notes,getTravel,addTravel,deleteTravel,editTravel}}>
        {props.children}
      </TBcontext.Provider>
    )
}
export default Tbstate;