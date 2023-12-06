import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, BtnContain,Text } from './EditElements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../../Acontext/Authcontext' 
import Tkcontext from '../Tkcontext/Tkcontext'
import { useContext,useState,useEffect } from 'react'
const EditTk = (props) => {
  //const{showAlert}=props
  const context=useContext(Tkcontext);
   const{editTicket}=context
    const history=useNavigate()
  // const obj=localStorage.getItem("element")
  // const element=JSON.parse(obj)
  //   console.log(element.ename);
  const obj=localStorage.getItem("element")
    const element=JSON.parse(obj)
      console.log(element.to);
  useEffect(() => {
    
   setNote({from:element.from,to:element.to,on:element.on,time:element.time,count:element.count,contact:element.contact})
   
  }, [])
  
 const onChange =(e)=>{
  setNote({...note,[e.target.name]:e.target.value})
 }
 const handleSubmit=async(e)=>{
   e.preventDefault();
   editTicket(element._id,note.from,note.to,note.on,note.time,note.count,note.contact)
   alert("Edited note successfully")
   localStorage.removeItem('element')
   history('/otherservicesebt')
  
 }
 const [note, setNote] = useState({from:"",to:"",on:"",time:"",count:"",contact:""})
  return (
    <>
    <Container>
      <FormWrap>
      <FormTop>
        <Icon to="/">EasyGo</Icon>
        <ExitIcon to="/otherservicesebt"> <RxCross1/></ExitIcon>
      </FormTop>
          <FormContent>
            <Form action="#"onSubmit={handleSubmit}>
              <FormH1>Edit Ticket</FormH1>
              <FormLabel htmlFor='for'>From</FormLabel>
              <FormInput id='from' type="text"name='from' value={note.from} onChange={onChange}  minLength={3}/>
              <FormLabel htmlFor='for'>To</FormLabel>
              <FormInput id='to' type="text"name='to' value={note.to} onChange={onChange} minLength={3}/>
              <FormLabel htmlFor='for'>On</FormLabel>
              <FormInput id='on' type="text"name='on' value={note.on} onChange={onChange} />
              <FormLabel htmlFor='for'>Time</FormLabel>
              <FormInput id='time'  type="text"name='time' value={note.time} onChange={onChange}/>
              <FormLabel htmlFor='for'>Count</FormLabel>
              <FormInput id='count' type="text"name='count' value={note.count} onChange={onChange}/>
              <FormLabel htmlFor='for'>Contact</FormLabel>
              <FormInput id='contact'  type="text"name='contact' value={note.contact} onChange={onChange} minLength={8}/>
             
              <FormButton type='submit' disabled={note.from.length<3||note.contact.length<8||note.to.length<3} >Edit</FormButton>
              
            
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default EditTk;