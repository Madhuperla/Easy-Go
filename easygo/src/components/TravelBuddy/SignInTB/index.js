import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignInTBElements'
// import { Form } from 'react-router-dom'

const SignInTB = () => {
  return (
    <>
    <Container>
      <FormWrap>
        <FormTop>
        <Icon to="/">EasyGo</Icon>
        <ExitIcon to="/travelbuddy"> <RxCross1/></ExitIcon>
        </FormTop>
     
          <FormContent>
            <Form action="#">
              <FormH1>Travel Buddy Form</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required/>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required/>
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default SignInTB;