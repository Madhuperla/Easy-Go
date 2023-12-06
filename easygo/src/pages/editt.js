import React from 'react'
import EditT from '../components/TravelBuddy/Edit';
import ScrollToTop from '../components/ScrollToTop';
import Tbstate from '../components/TravelBuddy/Tcontext/Tbstate';
const EditTPage = () => {
  return (
    <>
    <Tbstate>
    <ScrollToTop/>
      <EditT/>
      </Tbstate>
    </>
  )
}

export default EditTPage;