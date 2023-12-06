import React from 'react'
import EditTk from '../components/OtherServicesEBT/Edit';
import ScrollToTop from '../components/ScrollToTop';
import Tkstate from '../components/OtherServicesEBT/Tkcontext/Tkstate';
const EditTkPage = () => {
  return (
    <>
    <Tkstate>
    <ScrollToTop/>
      <EditTk/>
      </Tkstate>
    </>
  )
}

export default EditTkPage;