import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, BtnContain,Text } from './EditElements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../../Acontext/Authcontext' 
import CUcontext from '../Ccontext/CUcontext'
import { useContext,useState,useEffect } from 'react'

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
 
const EditC = (props) => {
  //const{showAlert}=props
  const context=useContext(CUcontext);
   const{editEvent}=context
    const history=useNavigate()
  // const obj=localStorage.getItem("element")
  // const element=JSON.parse(obj)
  //   console.log(element.ename);
  const obj=localStorage.getItem("element")
    const element=JSON.parse(obj)
      console.log(element.ename);
  useEffect(() => {
    
   setNote({ename:element.ename,place:element.place,college:element.college,description:element.description,eon:element.eon,tag:element.tag,image:element.image,contact:element.contact})
   
  }, [])
  
 const onChange =(e)=>{
  setNote({...note,[e.target.name]:e.target.value})
 }
 const handleSubmit=async(e)=>{
   e.preventDefault();
   editEvent(element._id,note.ename,note.description,note.place,note.eon,note.tag,note.college,note.image,note.contact)
   
   alert("Edited note successfully")
   //toast.success("Edited note successfully");
   
   localStorage.removeItem('element')
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
              <FormH1>Edit Event</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput id='ename' type="text"name='ename' value={note.ename} onChange={onChange} />
              <FormLabel htmlFor='for'>College</FormLabel>
              <FormInput id='college' type="text"name='college' value={note.college} onChange={onChange}/>
              <FormLabel htmlFor='for'>Place</FormLabel>
              <FormInput id='place'  type="text"name='place' value={note.place} onChange={onChange}/>
              <FormLabel htmlFor='for'>Description</FormLabel>
              <FormInput id='description' type="text"name='description' value={note.description} onChange={onChange}/>
              <FormLabel htmlFor='for'>Date&Time</FormLabel>
              <FormInput id='eon' type="text"name='eon' value={note.eon} onChange={onChange}/>
              <FormLabel htmlFor='for'>Tag</FormLabel>
              <FormInput id='tag'  type="text"name='tag'  value={note.tag} onChange={onChange}/>
              <FormLabel htmlFor='for'>Image Url</FormLabel>
              <FormInput id='image'  type="text"name='image' value={note.image} onChange={onChange}/>
              <FormLabel htmlFor='for'>Contact</FormLabel>
              <FormInput id='contact'  type="text"name='contact' value={note.contact} onChange={onChange}/>
             
              <FormButton type='submit' disabled={note.ename.length<3||note.contact.length<8||note.college.length<3} >Edit</FormButton>
              
            
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default EditC;