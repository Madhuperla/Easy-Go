import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: -webkit-linear-gradient(to right, #c4c5fb, #4182ef );
	background: linear-gradient(to right,#c4c5fb,#4182ef);
  //   background: -webkit-linear-gradient(to right, #6ceeb8, #03b171 );
	// background: linear-gradient(to right, #c4c5fb,#03b171);#92b0e2

  font-family: 'Lobster';
  // background: linear-gradient(
  //   108deg,
    
  //   rgba(1,147,86,1) 0%,
  //   rgba(10, 201, 122, 1) 100%
  // );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px){
    height: 80%;
  }
`;

export const FormTop=styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 930px){
    display: flex;
  }
`

export const Icon=styled(Link)`
  margin-left: 10px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 930px){
    margin-left: 16px;
    margin-top: 16px;
  }
`;


export const ExitIcon=styled(Link)`
  margin-left: 750px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 930px){
    margin-left: 200px;
    margin-top: 16px;
  }
`;


export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px){
    padding: 8px;
  }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const FormH1=styled.h1`
  margin-bottom: 30px;
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  font-family: 'Lobster';
  text-align: center;
`;

export const FormLabel=styled.label`
  margin-bottom: 8px;
  font-family: 'Lobster';
  font-size: 16px;
  color: #fff;
`

export const FormInput=styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  font-family: 'Lobster';
  font-size: 16px;
  border: none;
  broder-radius: 4px;
`;


export const FormButton=styled.button`
   background: #5151e4;
   padding: 16px 0;
   border: none;
   border-radius: 4px;
   color: #fff;
   font-size: 20px;
   font-family: 'Lobster';
   cursor: pointer;
`;


export const Text=styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const NavButton = styled.button`

  border-radius: 50px;
  background: ${({scrollNav}) => (scrollNav ? '#01bf71' : '#30d0a2')};
 white-space: nowrap;
 padding: 10px 22px;

 color: #010606;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;

 &:hover{
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
 }
`;










