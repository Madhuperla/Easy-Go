import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './AddElements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../../Acontext/Authcontext' 
import LFcontext from '../Lcontext/LFcontext'
import { useContext,useState } from 'react'
const AddL = () => {
  //const{showAlert}=props
  const context=useContext(LFcontext);
  const{addItem}=context
 const history=useNavigate()

 const onChange =(e)=>{
  setNote({...note,[e.target.name]:e.target.value})
 }
 const handleSubmit=async(e)=>{
   e.preventDefault();
   addItem(note.name,note.description,note.place,note.status,note.on,note.image,note.contact)
   alert("Created a new note","success")
   history('/lostandfound')
 }
 const [note, setNote] = useState({name:"",status:"",place:"",description:"",on:"",image:"",contact:""})
  return (
    <>
    <Container>
      <FormWrap>
      <FormTop>
        <Icon to="/">EasyGo</Icon>
        <ExitIcon to="/lostandfound"> <RxCross1/></ExitIcon>
      </FormTop>
          <FormContent>
            <Form action="#"onSubmit={handleSubmit}>
              <FormH1>Add Item</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput id='name' type="text"name='name' value={note.name} onChange={onChange} required minLength={3}/>
              <FormLabel htmlFor='for'>Status</FormLabel>
              <FormInput id='status' type="text"name='status' value={note.status} onChange={onChange}required />
              <FormLabel htmlFor='for'>Place</FormLabel>
              <FormInput id='place' type="text"name='place' value={note.place} onChange={onChange}required />
              <FormLabel htmlFor='for'>Description</FormLabel>
              <FormInput id='description' type="text"name='description' value={note.description} onChange={onChange}required minLength={3}/>
              <FormLabel htmlFor='for'>Date&Time</FormLabel>
              <FormInput id='on' type="text"name='on' value={note.on} onChange={onChange}required/>
              <FormLabel htmlFor='for'>Image Url</FormLabel>
              <FormInput id='image'  type="text"name='image' value={note.image} onChange={onChange}required/>
              <FormLabel htmlFor='for'>Contact</FormLabel>
              <FormInput id='contact'  type="text"name='contact' value={note.contact} onChange={onChange}required minLength={3}/>
              <FormButton type='submit' disabled={note.name.length<3||note.contact.length<8||note.description.length<3}>Continue</FormButton>
           
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default AddL;