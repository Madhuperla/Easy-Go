import React from 'react'
import EditC from '../components/CollegeUpdates/Edit';
import ScrollToTop from '../components/ScrollToTop';
import CUstate from '../components/CollegeUpdates/Ccontext/Custate';
const EditCPage = () => {
  return (
    <>
    <CUstate>
    <ScrollToTop/>
      <EditC/>
      </CUstate>
    </>
  )
}

export default EditCPage;