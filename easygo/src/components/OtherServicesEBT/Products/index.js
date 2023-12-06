import React from 'react'
import {
  ProductContainer,
  ProductWrapper,
  ProductHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductLabel,
  ProductList,
  ProductDesc,
  ProductPrice,
  ProductButton,
  BtnContain,
  ProductEnd
} from './ProductsElements';
import ticket from'../ebtimages/ticket.webp'
// import data from './data';
import { useNavigate } from 'react-router-dom';
import Tkcontext from '../Tkcontext/Tkcontext';
import { useContext } from 'react';


const Products = ({heading, data}) => {
  const history=useNavigate()
  const context=useContext(Tkcontext)
  const {deleteTicket}=context
 
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
      history("/edittk")
  
     }
     else{
       console.log("Unauthorized request")
       history("/otherservicesebt")
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
        alert(`${note.to} is getting deleted`)
      deleteTicket(note._id)
      console.log("Deleted note")
      history("/otherservicesebt")

  
     }
     else{
       console.log("Unauthorized request")
       history("/otherservicesebt")
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
              <ProductImg src={ticket} alt={product.time}/>
              <ProductInfo>
                <ProductList>
                "
                <ProductTitle>{product.from}</ProductTitle>
                " - "
                <ProductTitle>{product.to}</ProductTitle>
                "
                </ProductList>

                <ProductList>
                <ProductLabel>Travelling Date : </ProductLabel>
                <ProductDesc>{product.on}</ProductDesc>
                </ProductList>

                
                <ProductList>
                <ProductLabel>Travelling Time : </ProductLabel>
                <ProductDesc>{product.time}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>No.of Tickets : </ProductLabel>
                <ProductDesc>{product.count}</ProductDesc>
                </ProductList>

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