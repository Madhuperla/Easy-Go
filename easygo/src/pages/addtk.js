import React from 'react'
import AddTk from '../components/OtherServicesEBT/Add';
import ScrollToTop from '../components/ScrollToTop';
import Tkstate from '../components/OtherServicesEBT/Tkcontext/Tkstate';
const AddTkPage = () => {
  return (
    <>
    <Tkstate>
    <ScrollToTop/>
      <AddTk/>
      </Tkstate>
    </>
  )
}

export default AddTkPage;