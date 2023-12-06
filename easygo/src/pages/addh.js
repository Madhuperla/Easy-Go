import React from 'react'
import AddH from '../components/OtherServicesHAF/Add';
import ScrollToTop from '../components/ScrollToTop';
import Hfstate from '../components/OtherServicesHAF/Hcontext/Hfstate';
const AddHPage = () => {
  return (
    <>
    <Hfstate>
    <ScrollToTop/>
      <AddH/>
      </Hfstate>
    </>
  )
}

export default AddHPage;