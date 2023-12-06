import React from 'react'
import Emailverf from '../components/Emailverf';
import ScrollToTop from '../components/ScrollToTop';
import Authstate from '../components/Acontext/Authstate';
const EmailverfPage = () => {
  return (
    <>
    <Authstate>
    <ScrollToTop/>
      <Emailverf/>
      </Authstate>
    </>
  )
}

export default EmailverfPage;