import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton,NavButton, Text } from './ForgotpassElemnts'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../Acontext/Authcontext' 
import { useContext,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
const Forgotpass = (props) => {
  //const{showAlert}=props
  const context=useContext(Authcontext);
  const{updatePass}=context;
  

 
  const history=useNavigate()
 const onChange =(e)=>{
  setCred({...cred,[e.target.name]:e.target.value})
 }
 

   
 const handleSubmit=async(e)=>{
   e.preventDefault();
  
     updatePass(cred.password);
     history("/");
    
    }
 

    
 const [cred, setCred] = useState({password:""})

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
              <FormH1>Verify Your account</FormH1>
              <FormLabel htmlFor='for'>New Pass</FormLabel>
              <FormInput type='text' id="password"name="password" value={cred.password} onChange={onChange} required/>
              <FormButton type='submit'>Change Pass</FormButton>
             
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default Forgotpass;