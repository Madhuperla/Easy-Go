import React from 'react'
import video1 from '../../../videos/video11.mp4'
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
  ProductButton,
  BtnContain,
  PVideoBg,
  ProductContain,
  ProductBg,
  ProductEnd
} from './ProductsElements';

// import data from './data';

import { useNavigate } from 'react-router-dom';
import TBcontext from '../Tcontext/TBcontext';
import { useContext } from 'react';


const Products = ({heading, data}) => {
  const history=useNavigate()
  const context=useContext(TBcontext)
  const {deleteTravel}=context
 
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
      history("/editt")
  
     }
     else{
       console.log("Unauthorized request")
       history("/travelbuddy")
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
      deleteTravel(note._id)
      console.log("Deleted note")
      history("/travelbuddy")

  
     }
     else{
       console.log("Unauthorized request")
       history("/travelbuddy")
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
              <ProductImg src={product.image} alt={product.to}/>
              <ProductInfo>
                <ProductList>
                  "
                <ProductTitle>{product.from} </ProductTitle>
                " - "
                <ProductTitle> {product.to}</ProductTitle>
                "
                </ProductList>


                <ProductList>
                <ProductLabel>Travelling On : </ProductLabel>
                <ProductDesc>{product.on}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Vehicle Type : </ProductLabel>
                <ProductDesc>{product.vtype}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Vehiclenumber : </ProductLabel>
                <ProductDesc>{product.vnumber}</ProductDesc>
                </ProductList>

                <ProductPrice>Rs.{product.fare}</ProductPrice>


                <ProductList>
                <ProductDesc> Got {product.buddies} buddies till now !</ProductDesc>
                </ProductList>


                <ProductList>
                <ProductLabel>contact : </ProductLabel>
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
    </>
  )
}

export default Products