import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, BtnContain,Text } from './EditElements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../../Acontext/Authcontext' 
import Hfcontext from '../Hcontext/Hfcontext'
import { useContext,useState,useEffect } from 'react'
const EditH = (props) => {
  //const{showAlert}=props
  const context=useContext(Hfcontext);
   const{editHelp}=context
    const history=useNavigate()
  // const obj=localStorage.getItem("element")
  // const element=JSON.parse(obj)
  //   console.log(element.ename);
  const obj=localStorage.getItem("element")
    const element=JSON.parse(obj)
      console.log(element.name);
  useEffect(() => {
    
   setNote({name:element.name,description:element.description,image:element.image,contact:element.contact})
   
  }, [])
  
 const onChange =(e)=>{
  setNote({...note,[e.target.name]:e.target.value})
 }
 const handleSubmit=async(e)=>{
   e.preventDefault();
   editHelp(element._id,note.name,note.description,note.image,note.contact)
   alert("Edited note successfully")
   localStorage.removeItem('element')
   history('/otherserviceshaf')
  
 }
 const [note, setNote] = useState({name:"",description:"",image:"",contact:""})
  return (
    <>
    <Container>
      <FormWrap>
      <FormTop>
        <Icon to="/">EasyGo</Icon>
        <ExitIcon to="/otherserviceshaf"> <RxCross1/></ExitIcon>
      </FormTop>
          <FormContent>
            <Form action="#"onSubmit={handleSubmit}>
              <FormH1>Edit Help</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput id='name' type="text"name='name' value={note.name} onChange={onChange} />
              <FormLabel htmlFor='for'>Description</FormLabel>
              <FormInput id='description' type="text"name='description' value={note.description} onChange={onChange}/>
              <FormLabel htmlFor='for'>Image Url</FormLabel>
              <FormInput id='image'  type="text"name='image' value={note.image} onChange={onChange}/>
              <FormLabel htmlFor='for'>Contact</FormLabel>
              <FormInput id='contact'  type="text"name='contact' value={note.contact} onChange={onChange}/>
             
              <FormButton type='submit' disabled={note.name.length<3||note.contact.length<8} >Edit</FormButton>
              
            
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default EditH;