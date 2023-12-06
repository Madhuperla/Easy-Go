import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, BtnContain,Text } from './EditElements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../../Acontext/Authcontext' 
import TBcontext from '../Tcontext/TBcontext'
import { useContext,useState,useEffect } from 'react'
const EditT = (props) => {
  //const{showAlert}=props
  const context=useContext(TBcontext);
   const{editTravel}=context
    const history=useNavigate()
  
  const obj=localStorage.getItem("element")
    const element=JSON.parse(obj)
      console.log(element.to);
  useEffect(() => {
    
   setNote({from:element.from,to:element.to,on:element.on,vtype:element.vtype,vnumber:element.vnumber,fare:element.fare,buddies:element.buddies,image:element.image,contact:element.contact})
   
  }, [])
  
 const onChange =(e)=>{
  setNote({...note,[e.target.name]:e.target.value})
 }
 const handleSubmit=async(e)=>{
   e.preventDefault();
   editTravel(element._id,note.from,note.to,note.on,note.vtype,note.vnumber,note.fare,note.buddies,note.image,note.contact)
   alert("Edited note successfully")
   localStorage.removeItem('element')
   history('/travelbuddy')
  
 }
 const [note, setNote] = useState({from:"",to:"",on:"",vtype:"",vnumber:"",fare:"",buddies:"",image:"",contact:""})
  return (
    <>
    <Container>
      <FormWrap>
      <FormTop>
        <Icon to="/">EasyGo</Icon>
        <ExitIcon to="/travelbuddy"> <RxCross1/></ExitIcon>
      </FormTop>
          <FormContent>
            <Form action="#"onSubmit={handleSubmit}>
              <FormH1>Edit Travel</FormH1>
              <FormLabel htmlFor='for'>From</FormLabel>
              <FormInput id='from' type="text"name='from' value={note.from} onChange={onChange} minLength={3}/>
              <FormLabel htmlFor='for'>To</FormLabel>
              <FormInput id='to' type="text"name='to' value={note.to} onChange={onChange}minLength={3}/>
              <FormLabel htmlFor='for'>On</FormLabel>
              <FormInput id='on'  type="text"name='on' value={note.on} onChange={onChange}/>
              <FormLabel htmlFor='for'>Vtype</FormLabel>
              <FormInput id='vtype' type="text"name='vtype' value={note.vtype} onChange={onChange}/>
              <FormLabel htmlFor='for'>vnumber</FormLabel>
              <FormInput id='vnumber' type="text"name='vnumber' value={note.vnumber} onChange={onChange}/>
              <FormLabel htmlFor='for'>Fare</FormLabel>
              <FormInput id='fare'  type="text"name='fare'  value={note.fare} onChange={onChange}/>
              <FormLabel htmlFor='for'>Buddies</FormLabel>
              <FormInput id='buddies'  type="text"name='buddies'  value={note.buddies} onChange={onChange}/>
              <FormLabel htmlFor='for'>Image Url</FormLabel>
              <FormInput id='image'  type="text"name='image' value={note.image} onChange={onChange}/>
              <FormLabel htmlFor='for'>Contact</FormLabel>
              <FormInput id='contact'  type="text"name='contact' value={note.contact} onChange={onChange}minLength={8}/>
             
              <FormButton type='submit' disabled={note.from.length<3||note.contact.length<8||note.to.length<3} >Edit</FormButton>
              
            
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default EditT;