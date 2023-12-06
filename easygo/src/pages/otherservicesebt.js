import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import OtherServicesEBT from '../components/OtherServicesEBT';
import Tkstate from '../components/OtherServicesEBT/Tkcontext/Tkstate';

const OtherServicesebtPage = () => {
  return (
    // <div>OtherServices</div>
    <>
     <Tkstate>
      <ScrollToTop/>
      <OtherServicesEBT/>
      </Tkstate>
    </>
  )
}

export default OtherServicesebtPage