import Authcontext from './Authcontext'
import { useState,useEffect } from "react";

const Authstate=(props)=>{

    const data=[] 
        
    const[user,setUser]=useState(data);
    const[flag,setFlag]=useState(false);
  
    
    

   
    const addUser=async(name,email,college,rollno,phonenumber,password)=>{
        const response = await fetch( "http://localhost:8000/api/auth/createuser", {
           method: "POST", 
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({name,email,rollno,college,phonenumber,password}), 
         });
         const json=await response.json();
         console.log(json)
         if(json.success)
         {
          
         setUser(json.user);
         localStorage.setItem("token",json.authtoken)
         localStorage.setItem("user_id",json.user.id)
         setFlag({flag:true})
          
         }
      }
      const Login=async(email,password)=>{
        
        const response = await fetch( "http://localhost:8000/api/auth/login", {
           method: "POST", 
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({email,password}), 
         });
         const json=await response.json();
         console.log(json);
        
    
       
    
        
        if(json.success)
        {
          localStorage.setItem("token",json.authtoken)
          localStorage.setItem("user_id",json.id)
          setFlag({flag:true})
        }
      }
    const getUser=async()=>{
        const details = await fetch( "http://localhost:8000/api/auth/getuser", {
                method: "POST", 
                headers: {
                  "Content-Type": "application/json",
                  "auth-token":localStorage.getItem('token')
                },
                
              });
              const person=details.json()
              setUser(person);
    }

    const getOtp=async(email)=>{
      const details = await fetch( "http://localhost:8000/api/auth/userotp", {
              method: "POST", 
              headers: {
                "Content-Type": "application/json",
                
              }, body: JSON.stringify({email}), 
              
            });
            const json=await details.json();
            if(json.success)
            {
              localStorage.setItem("otp",json.message)
            }
            
           console.log("Otp Sent to Your Email");
  }
  const otpVerf=async(email,otp)=>{
    const details = await fetch( "http://localhost:8000/api/auth/otpverf", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              
            }, body: JSON.stringify({email,otp}), 
            
          });
          const json=await details.json();
          console.log(json);
         
         
         if(json.success)
         {
           localStorage.setItem("token",json.authtoken)
           localStorage.setItem("user_id",json.id)
           setFlag({flag:true})
         }
         
}

const fotpVerf=async(email,otp)=>{
  const details = await fetch( "http://localhost:8000/api/auth/fotpverf", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            
          }, body: JSON.stringify({email,otp}), 
          
        });
        const json=await details.json();
        console.log(json);
       
       
       if(json.success)
       {
         localStorage.setItem("fotp",json.otp)
         setFlag({flag:true})
       }
       
}
const updatePass=async(password)=>{
  
             
  const details = await fetch( "http://localhost:8000/api/auth/updatepass", {
          method: "PUT", 
          headers: {
                    "Content-Type": "application/json",
                    "auth-token":localStorage.getItem('token')
            
                  }, body: JSON.stringify({password}), 
          
        });
        const json=await details.json();
        console.log(json);
       if(json.success==true)
       {
         console.log("Password Changed Successfully")
       }
       
}



    return(
      <Authcontext.Provider value={{user,flag,getUser,addUser,Login,getOtp,otpVerf,fotpVerf,updatePass}}>
        {props.children}
      </Authcontext.Provider>
    )
}
export default Authstate;