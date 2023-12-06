import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton,NavButton, Text } from './Passverfelements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../Acontext/Authcontext' 
import { useContext,useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
const Passverf = () => {
  //const{showAlert}=props
  const context=useContext(Authcontext);
  const{user,getOtp,otpVerf}=context;
  

 
  const history=useNavigate()
 const onChange =(e)=>{
  setCred({...cred,[e.target.name]:e.target.value})
 }
 const noteChange =(e)=>{
    setNote({...enote,[e.target.name]:e.target.value})
   }
   const ref=useRef(null);
   
 const handleSubmit=async(e)=>{
   e.preventDefault();
   //console.log({email:cred.email})
     getOtp(cred.email);
     const OTP= localStorage.getItem('otp');
    if(OTP!=null){
      console.log("Otp sent to email")
      console.log(OTP)
      ref.current.click();
    }
} 
   
    const handleClick=async(e)=>{
        e.preventDefault();
      
        await otpVerf(cred.email,enote.otp);
        const token =localStorage.getItem('token');
        console.log(token);
        if(token!=null){
        alert("Otp verified successfully")
        history("/forgotpass");
    }
    else{
        alert("Otp incorrect")
    }
    
    }
 
 const [cred, setCred] = useState({email:"",password:""})
 const [enote, setNote] = useState({otp:""})
  return (
    <>
    <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

     
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Enter Otp</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
               <form>
              <div className="mb-3">
              <label htmlFor="title" className="form-label">OTP</label>
              <input style={{paddingRight: "0px"}}type="text" className="form-control" id="otp" name="otp" value={enote.otp} onChange={noteChange} minLength={6}required/>
              </div>
              
            
              </form>
              </div>
              <div className="modal-footer">
                
                <button type="button" disabled={enote.otp.length<6} className="btn btn-primary" onClick={handleClick} data-bs-dismiss="modal">Verify Otp</button>
              </div>
            </div>
          </div>
        </div>
    <Container>
      <FormWrap>
      <FormTop>
        <Icon to="/">EasyGo</Icon>
        <ExitIcon to="/"> <RxCross1/></ExitIcon>
      </FormTop>
          <FormContent>
            <Form action="#"onSubmit={handleSubmit}>
              <FormH1>Verify Your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' id="email"name="email" value={cred.email} onChange={onChange} required/>
              <FormButton type='submit'>Get Otp</FormButton>
             
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default Passverf;