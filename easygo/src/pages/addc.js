import React from 'react'
import AddC from '../components/CollegeUpdates/Add';
import ScrollToTop from '../components/ScrollToTop';
import CUstate from '../components/CollegeUpdates/Ccontext/Custate';
const AddCPage = () => {
  return (
    <>
    <CUstate>
    <ScrollToTop/>
      <AddC/>
      </CUstate>
    </>
  )
}

export default AddCPage;