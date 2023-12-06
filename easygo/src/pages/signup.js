import React from 'react'
import SignUp from '../components/Signup';
import ScrollToTop from '../components/ScrollToTop';
import Authstate from '../components/Acontext/Authstate';
const SignupPage = () => {
  return (
    <>
    <Authstate>
    <ScrollToTop/>
      <SignUp/>
      </Authstate>
    </>
  )
}

export default SignupPage;