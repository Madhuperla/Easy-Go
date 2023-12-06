import React from 'react'
import video1 from '../../../videos/video14.mp4'
import {
  ProductContainer,
  ProductWrapper,
  ProductHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductList,
  ProductLabel,
  ProductButton,
  BtnContain,
  ProductContain,
  ProductBg,
  PVideoBg,
  ProductEnd
} from './ProductsElements';
// import data from './data';
import { useNavigate } from 'react-router-dom';
import LFcontext from '../Lcontext/LFcontext';
import { useContext } from 'react';


const Products = ({heading, data}) => {
  const history=useNavigate()
  const context=useContext(LFcontext)
  const {deleteItem}=context
 
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
      history("/editl")
  
     }
     else{
       console.log("Unauthorized request")
       history("/lostandfound")
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
      deleteItem(note._id)
      console.log("Deleted note")
      history("/lostandfound")

  
     }
     else{
       console.log("Unauthorized request")
       history("/lostandfound")
     }
    }
  }
  return (<>
  <ProductContain>
  <ProductBg>
      <PVideoBg autoPlay loop muted src={video1} type='video/mp4'/>
  </ProductBg>
  </ProductContain>
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
         {data.map((product, index) => {
           return(
            <ProductCard Key={index}>
              <ProductImg src={product.image} alt={product.name}/>
              <ProductInfo>
                {/* <ProductTitle>{product.name}</ProductTitle> */}

                <ProductList>
                <ProductLabel>Name : </ProductLabel>
                <ProductDesc>{product.name}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Lost/Found On : </ProductLabel>
                <ProductDesc>{product.on}</ProductDesc>
                </ProductList>
                
                <ProductList>
                <ProductLabel>Lost/Found At : </ProductLabel>
                <ProductDesc>{product.place}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Lost/Found status : </ProductLabel>
                <ProductDesc>{product.status}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Contact Info : </ProductLabel>
                <ProductDesc>{product.contact}</ProductDesc>
                </ProductList>

                <ProductDesc>{product.description}</ProductDesc>
                
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
    </>
  )
}

export default Products