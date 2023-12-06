import React from 'react'
import Passverf from '../components/Forgotpass/Passverf';
import ScrollToTop from '../components/ScrollToTop';
import Authstate from '../components/Acontext/Authstate';
const PassverfPage = () => {
  return (
    <>
    <Authstate>
    <ScrollToTop/>
      <Passverf/>
      </Authstate>
    </>
  )
}

export default PassverfPage;