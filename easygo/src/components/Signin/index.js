import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton,NavButton, Text } from './SigninElements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../Acontext/Authcontext' 
import { useContext,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
const SignIN = () => {
  //const{showAlert}=props
  const context=useContext(Authcontext);
  const{user,flag,Login}=context;
  

 
  const history=useNavigate()
 const onChange =(e)=>{
  setCred({...cred,[e.target.name]:e.target.value})
 }
 const handleSubmit=async(e)=>{
   e.preventDefault();
   console.log({email:cred.email,password:cred.password})
    await Login(cred.email,cred.password);
    const val=localStorage.getItem('token');
      console.log(val)
    if(val!=null){
      console.log("Logged in successfully")
      const val=localStorage.getItem('token');
      console.log(val)
      
     history("/")
     
 
    }
    else{
      history("/signin")
      // localStorage.setItem('success',false);
      console.log("Login  unsuccessful : invalid credentials")
      
    }
 }
 const [cred, setCred] = useState({email:"",password:""})
  return (
    <>
    <Container>
      <FormWrap>
      <FormTop>
        <Icon to="/">EasyGo</Icon>
        <ExitIcon to="/"> <RxCross1/></ExitIcon>
      </FormTop>
          <FormContent>
            <Form action="#"onSubmit={handleSubmit}>
              <FormH1>Sign Into Your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' id="email"name="email" value={cred.email} onChange={onChange} required/>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' id="password"name="password" value={cred.password} onChange={onChange}required/>
              <FormButton type='submit'>Continue</FormButton>
              <Link className="nav-link " aria-current="page" to="/passverf" style={{color:"#0eafdd",textAlign:"center",marginTop:"16px"}}>Forgot Pass</Link>
              <Link className="nav-link " aria-current="page" to="/emailverf" style={{color:"#0eafdd",textAlign:"center",marginTop:"16px"}}>Signup</Link>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default SignIN;