import React from 'react'
import {
  ProductContainer,
  ProductWrapper,
  ProductHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductList,
  ProductLabel,
  ProductDesc,
  ProductPrice,
  ProductEnd,
  ProductButton,
  BtnContain
} from './ProductsElements';
// import data from './data';
import { useNavigate } from 'react-router-dom';
import Hfcontext from '../Hcontext/Hfcontext';
import { useContext } from 'react';

const Products = ({heading, data}) => {
  const history=useNavigate()
  const context=useContext(Hfcontext)
  const {deleteHelp}=context
 
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
      history("/edith")
  
     }
     else{
       console.log("Unauthorized request")
       history("/otherserviceshaf")
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
        alert(`${note.name} is getting deleted`)
      deleteHelp(note._id)
      console.log("Deleted note")
      history("/otherserviceshaf")

  
     }
     else{
       console.log("Unauthorized request")
       history("/otherserviceshaf")
     }
    }
  }
  
  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
         {data.map((product, index) => {
           return(
            <ProductCard Key={index}>
              <ProductImg src={product.image} alt={product.name}/>
              <ProductInfo>
           
              <ProductList>
                <ProductLabel>Myself : </ProductLabel>
                <ProductDesc>{product.name}</ProductDesc>
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

              <ProductEnd></ProductEnd>
                {/* <ProductButton>{product.button}</ProductButton> */}

              </ProductInfo>
            </ProductCard>

             )
         })}
      </ProductWrapper>
    </ProductContainer>
  )
}

export default Products