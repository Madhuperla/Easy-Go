import React from 'react'
import video8 from '../../../videos/video8.mp4';
import video2 from '../../../videos/video2.mp4';
import video3 from '../../../videos/video3.mp4';
import video4 from '../../../videos/video4.mp4';
import video6 from '../../../videos/video6.mp4';
import {
  ProductContainer,
  ProductContain,
  ProductWrapper,
  ProductHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductLabel,
  ProductList,
  ProductDesc,
  ProductEnd,
  ProductButton,
  ProductBg,
  PVideoBg,
  BtnContain,
  PBtnLink
} from './ProductsElements';
// import data from './data';
import { useNavigate } from 'react-router-dom';
import CUcontext from '../Ccontext/CUcontext';
import { useContext } from 'react';


const Products = ({heading, data}) => {

  const history=useNavigate()
  const context=useContext(CUcontext)
  const {deleteEvent}=context
 
  const checkUser=(note)=>{
    
    const id=localStorage.getItem("user_id")
    console.log(note)
    const check=note.user;
    const element=JSON.stringify(note)
    localStorage.setItem("element",element)
  
    if(id==null)
    {
      console.log("Login Required")
      history("/signin")
    }
    else{
      if(check==id){
      console.log("Edit note")
      history("/editc")
  
     }
     else{
       console.log("Unauthorized request")
       history("/collegeupdates")
     }
    }
  }
  
  const checkDelete=(note)=>{
    
    const id=localStorage.getItem("user_id")
    console.log(note)
    const check=note.user;
    
  
    if(id==null)
    {
      console.log("Login Required")
      history("/signin")
    }
    else{
      if(check==id){
        alert(`${note.enmae} is getting deleted`)
      deleteEvent(note._id)
      console.log("Deleted note")
      history("/collegeupdates")

  
     }
     else{
       console.log("Unauthorized request")
       history("/collegeupdates")
     }
    }
  }
  
  return ( <>
  
  <ProductContain>
  
  
    <ProductBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
        <PVideoBg autoPlay loop muted src={video8} type='video/mp4'/>
    </ProductBg>
    <ProductBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
        <PVideoBg autoPlay loop muted src={video2} type='video/mp4'/>
    </ProductBg>
   
    
    <ProductBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
        <PVideoBg autoPlay loop muted src={video4} type='video/mp4'/>
    </ProductBg>
    <ProductBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
        <PVideoBg autoPlay loop muted src={video6} type='video/mp4'/>
    </ProductBg>
    
   
    
    </ProductContain>
       <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
         {data.map((product, index) => {
           return(
            <ProductCard Key={index}>
              <ProductImg src={product.image} alt={product.ename}/>
              <ProductInfo>
                <ProductTitle>{product.ename}</ProductTitle>


                <ProductList>
                <ProductLabel>College : </ProductLabel>
                <ProductDesc>{product.college}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Place : </ProductLabel>
                <ProductDesc>{product.place}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Event On : </ProductLabel>
                <ProductDesc>{product.eon}</ProductDesc>
                </ProductList>

                <ProductDesc>{product.description}</ProductDesc>
                 
                <ProductList>
                <ProductLabel>Contact : </ProductLabel>
                <ProductDesc>{product.contact}</ProductDesc>
                </ProductList>
                 
                <ProductList>
                  <BtnContain>
                <ProductButton onClick={()=>{checkUser(product)}}>Edit</ProductButton>
                <ProductButton onClick={()=>{checkDelete(product)}}>Delete</ProductButton>
                </BtnContain>
                </ProductList>
                
                    {/* <PBtn>
                    <PBtnLink to="/editc">Edit/Delete</PBtnLink>
                    </PBtn> */}

                {/* <ProductEnd></ProductEnd> */}

                {/* <ProductButton>{product.button}</ProductButton> */}

              </ProductInfo>
            </ProductCard>

             )
         })}
      </ProductWrapper>
    </ProductContainer>
    </>
  )
}

export default Products