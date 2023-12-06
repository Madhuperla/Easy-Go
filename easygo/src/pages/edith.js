import React from 'react'
import EditH from '../components/OtherServicesHAF/Edit';
import ScrollToTop from '../components/ScrollToTop';
import Hfstate from '../components/OtherServicesHAF/Hcontext/Hfstate';
const EditHPage = () => {
  return (
    <>
    <Hfstate>
    <ScrollToTop/>
      <EditH/>
      </Hfstate>
    </>
  )
}

export default EditHPage;