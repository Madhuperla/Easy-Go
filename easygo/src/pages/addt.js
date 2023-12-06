import React from 'react'
import AddT from '../components/TravelBuddy/Add';
import ScrollToTop from '../components/ScrollToTop';
import Tbstate from '../components/TravelBuddy/Tcontext/Tbstate';
const AddTPage = () => {
  return (
    <>
    <Tbstate>
    <ScrollToTop/>
      <AddT/>
      </Tbstate>
    </>
  )
}

export default AddTPage;
