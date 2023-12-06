import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignupElements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../Acontext/Authcontext' 
import { useContext,useState,useEffect} from 'react'
const SignUp = () => {
  //const{showAlert}=props
  const context=useContext(Authcontext);
  const{user,flag,addUser}=context;
  

 
  const history=useNavigate()
 const onChange =(e)=>{
  setCred({...cred,[e.target.name]:e.target.value})
 }
 const handleSubmit=async(e)=>{
   e.preventDefault();
   console.log({name:cred.name,email:cred.email,rollno:cred.rollno,college:cred.college,phonenumber:cred.phonenumber,password:cred.password})
   
    addUser(cred.name,cred.email,cred.college,cred.rollno,cred.phonenumber,cred.password);
    const val=localStorage.getItem('token');
      console.log(val)
    if(val!=null){
      console.log("Signedup successfully")
      
      localStorage.setItem('success',true);
     history("/")
     
 
    }
    else{
      history("/signup")
      // localStorage.setItem('success',false);
      console.log("addUser  unsuccessful : invalid credentials")
      
    }
 }
 const [cred, setCred] = useState({name:"",email:"",rollno:"",college:"",phonenumber:"",password:""})
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
              <FormH1>Sign Up</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='text' id="name"name="name" value={cred.name} onChange={onChange} required/>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' id="email"name="email" value={cred.email} onChange={onChange} required/>
              <FormLabel htmlFor='for'>Rollno</FormLabel>
              <FormInput type='text' id="rollno"name="rollno" value={cred.rollno} onChange={onChange} required/>
              <FormLabel htmlFor='for'> College</FormLabel>
              <FormInput type='text' id="college"name="college" value={cred.college} onChange={onChange} required/>
              <FormLabel htmlFor='for'>PhoneNumber</FormLabel>
              <FormInput type='text' id="phonenumber"name="phonenumber" value={cred.phonenumber} onChange={onChange} required/>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' id="password"name="password" value={cred.password} onChange={onChange}required/>
              <FormButton type='submit'diasbled={cred.name.length<4||cred.email.length<5||cred.college.length<4||cred.rollno.length<4||cred.phonenumber.length<10||cred.password.length<5}>Continue</FormButton>
         
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default SignUp;