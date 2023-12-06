import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignInHAFElements'
// import { Form } from 'react-router-dom'

const SignInHAF = () => {
  return (
    <>
    <Container>
      <FormWrap>
      <FormTop>
        <Icon to="/">EasyGo</Icon>
        <ExitIcon to="/otherserviceshaf"> <RxCross1/></ExitIcon>
      </FormTop>
          <FormContent>
            <Form action="#">
              <FormH1>Help a Friend Form</FormH1>
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

export default SignInHAF;