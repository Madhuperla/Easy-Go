import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const Button = styled(LinkS)`
  border-radius: 50px;
 
 //background-image: linear-gradient(to right, #b0b2fb, #646cff);
 //background: ${({primary}) => (primary ? '#ed8282' : '#010606')};
 background-image: linear-gradient(to right, #ffc4c4, #ed8282);
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: center;
  justify-content: center;
  align-items: left;
  transition: all 0.2s ease-in-out;

  &:hover{
  transition: all 0.2s ease-in-out;
  background: ${({primary}) => (primary ? '#fff' : '#fff')};
  
  }
`



export const ButtonR = styled(LinkR)`
  border-radius: 50px;
  //background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
//background: ${({primary}) => (primary ? '#37BEB0' : '#010606')};button colour for hero section previously#30d0a2
  background: ${({primary}) => (primary ? '#f5cac2' : '#141850')};
  //background-image: linear-gradient(to right, #b0b2fb, #646cff);
  //background-image: linear-gradient(to right, #1de3b2, #15c6ea);
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover{
  transition: all 0.2s ease-in-out;
  background: ${({primary}) => (primary ? '#fff' : '#738bdb')};
  
  }
`