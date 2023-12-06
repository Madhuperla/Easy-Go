import React from 'react'
import SignIN from '../components/Signin';
import ScrollToTop from '../components/ScrollToTop';
import Authstate from '../components/Acontext/Authstate';
const SigninPage = () => {
  return (
    <>
    <Authstate>
    <ScrollToTop/>
      <SignIN/>
      </Authstate>
    </>
  )
}

export default SigninPage;