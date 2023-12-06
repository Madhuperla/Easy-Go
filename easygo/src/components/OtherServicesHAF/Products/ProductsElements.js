import styled from 'styled-components';

export const ProductContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
//   background: #150f0f;
background: #f5cac2;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
border-radius: 15px;
  height: 300px;
  min-width: 300px;
  max-width: 100%;
//   box-shadow: 6px 6px #01bf71;
`;

export const ProductHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #010606;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: #010606;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: #010606;
`;

export const ProductList=styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   color: #010606;
`
export const ProductLabel=styled.h5`
   display: flex;
   justify-content: start;
   color: #010606;
   font-size:1rem
`
export const ProductDesc = styled.p`
  margin-left: 10px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #010606;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const BtnContain = styled.div`
 
  display: flex;
  flex-direction: row;
  // margin-left:180px;
`;
export const ProductButton = styled.button`
border-radius: 50px;
  font-size: 1rem;
  margin-right:18px;
  padding: 1rem 2rem;
  border: none;
//   background: #e31837;
// color: #fff;
background: #141850;
color:#fff ;
  transition: 0.2 ease-out;

  &:hover {
      transition: 0.2s ease-out;
      cursor: pointer;
      background: #fff;
      color: #010606;
    //   background: #ffc500;
    // color: #000;
  }
`;

export const ProductEnd=styled.hr`
  margin: 16px auto;
  width: 250px;
  border: 3px solid #141850;
  border-radius: 5px;
`
