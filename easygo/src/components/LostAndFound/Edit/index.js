import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, BtnContain,Text } from './EditElements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import LFcontext from '../Lcontext/LFcontext'
import { useContext,useState,useEffect } from 'react'
const EditL = (props) => {
  //const{showAlert}=props
  const context=useContext(LFcontext);
   const{editItem}=context
    const history=useNavigate()
  
  const obj=localStorage.getItem("element")
    const element=JSON.parse(obj)
      console.log(element.name);
  useEffect(() => {
    
   setNote({name:element.name,status:element.status,place:element.place,description:element.description,on:element.on,image:element.image,contact:element.contact})
   
  }, [])
  
 const onChange =(e)=>{
  setNote({...note,[e.target.name]:e.target.value})
 }
 const handleSubmit=async(e)=>{
   e.preventDefault();
   editItem(element._id,note.name,note.place,note.description,note.status,note.on,note.image,note.contact)
   alert("Edited note successfully")
   localStorage.removeItem('element')
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
              <FormH1>Edit Item</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput id='name' type="text"name='name' value={note.name} onChange={onChange} />
              <FormLabel htmlFor='for'>Status</FormLabel>
              <FormInput id='status' type="text"name='status' value={note.status} onChange={onChange}/>
              <FormLabel htmlFor='for'>Place</FormLabel>
              <FormInput id='place' type="text"name='place' value={note.place} onChange={onChange}required />
              <FormLabel htmlFor='for'>Description</FormLabel>
              <FormInput id='description' type="text"name='description' value={note.description} onChange={onChange}/>
              <FormLabel htmlFor='for'>Date&Time</FormLabel>
              <FormInput id='on' type="text"name='on' value={note.on} onChange={onChange}/>
              <FormLabel htmlFor='for'>Image Url</FormLabel>
              <FormInput id='image'  type="text"name='image' value={note.image} onChange={onChange}/>
              <FormLabel htmlFor='for'>Contact</FormLabel>
              <FormInput id='contact'  type="text"name='contact' value={note.contact} onChange={onChange}/>
             
              <FormButton type='submit' disabled={note.name.length<3||note.contact.length<8||note.description.length<3} >Edit</FormButton>
              
            
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default EditL;