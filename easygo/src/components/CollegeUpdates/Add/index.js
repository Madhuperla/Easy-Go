import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './AddElements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../../Acontext/Authcontext' 
import CUcontext from '../Ccontext/CUcontext'
import { useContext,useState } from 'react'
const AddC = () => {
  //const{showAlert}=props
  const context=useContext(CUcontext);
  const{addEvent}=context
 const history=useNavigate()

 const onChange =(e)=>{
  setNote({...note,[e.target.name]:e.target.value})
 }
 const handleSubmit=async(e)=>{
   e.preventDefault();
   addEvent(note.ename,note.description,note.place,note.eon,note.tag,note.college,note.image,note.contact)
   alert("Created a new note","success")
   history('/collegeupdates')
 }
 const [note, setNote] = useState({ename:"",place:"",college:"",description:"",eon:"",tag:"",image:"",contact:""})
  return (
    <>
    <Container>
      <FormWrap>
      <FormTop>
        <Icon to="/">EasyGo</Icon>
        <ExitIcon to="/collegeupdates"> <RxCross1/></ExitIcon>
      </FormTop>
          <FormContent>
            <Form action="#"onSubmit={handleSubmit}>
              <FormH1>Add Event</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput id='ename' type="text"name='ename' value={note.ename} onChange={onChange} required minLength={3}/>
              <FormLabel htmlFor='for'>College</FormLabel>
              <FormInput id='college' type="text"name='college' value={note.college} onChange={onChange}required minLength={3}/>
              <FormLabel htmlFor='for'>Place</FormLabel>
              <FormInput id='place'  type="text"name='place' value={note.place} onChange={onChange}required/>
              <FormLabel htmlFor='for'>Description</FormLabel>
              <FormInput id='description' type="text"name='description' value={note.description} onChange={onChange}required/>
              <FormLabel htmlFor='for'>Date&Time</FormLabel>
              <FormInput id='eon' type="text"name='eon' value={note.eon} onChange={onChange}required/>
              <FormLabel htmlFor='for'>Tag</FormLabel>
              <FormInput id='tag'  type="text"name='tag'  value={note.tag} onChange={onChange}required/>
              <FormLabel htmlFor='for'>Image Url</FormLabel>
              <FormInput id='image'  type="text"name='image' value={note.image} onChange={onChange}required/>
              <FormLabel htmlFor='for'>Contact</FormLabel>
              <FormInput id='contact'  type="text"name='contact' value={note.contact} onChange={onChange}required minLength={3}/>
              <FormButton type='submit' disabled={note.ename.length<3||note.contact.length<8||note.college.length<3}>Continue</FormButton>
           
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default AddC;