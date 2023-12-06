import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './AddElements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../../Acontext/Authcontext' 
import Tkcontext from '../Tkcontext/Tkcontext'
import { useContext,useState } from 'react'
const AddTk = () => {
  //const{showAlert}=props
  const context=useContext(Tkcontext);
  const{addTicket}=context
 const history=useNavigate()

 const onChange =(e)=>{
  setNote({...note,[e.target.name]:e.target.value})
 }
 const handleSubmit=async(e)=>{
   e.preventDefault();
   addTicket(note.from,note.to,note.on,note.time,note.count,note.contact)
   alert("Created a new note","success")
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
              <FormH1>Add Ticket</FormH1>
              <FormLabel htmlFor='for'>From</FormLabel>
              <FormInput id='from' type="text"name='from' value={note.from} onChange={onChange} required minLength={3}/>
              <FormLabel htmlFor='for'>To</FormLabel>
              <FormInput id='to' type="text"name='to' value={note.to} onChange={onChange}required minLength={3}/>
              <FormLabel htmlFor='for'>On</FormLabel>
              <FormInput id='on' type="text"name='on' value={note.on} onChange={onChange}required/>
              <FormLabel htmlFor='for'>Time</FormLabel>
              <FormInput id='time' type="text"name='time' value={note.time} onChange={onChange}required/>
              <FormLabel htmlFor='for'>Count</FormLabel>
              <FormInput id='count'  type="text"name='count'  value={note.count} onChange={onChange}required/>
              <FormLabel htmlFor='for'>Contact</FormLabel>
              <FormInput id='contact'  type="text"name='contact' value={note.contact} onChange={onChange}required minLength={8}/>
              <FormButton type='submit' disabled={note.from.length<3||note.contact.length<8||note.to.length<3}>Continue</FormButton>
           
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default AddTk;