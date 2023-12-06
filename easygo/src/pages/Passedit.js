import React from 'react'
import Forgotpass from '../components/Forgotpass';
import ScrollToTop from '../components/ScrollToTop';
import Authstate from '../components/Acontext/Authstate';
const ForgotpassPage = () => {
  return (
    <>
    <Authstate>
    <ScrollToTop/>
      <Forgotpass/>
      </Authstate>
    </>
  )
}

export default ForgotpassPage;