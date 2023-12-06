import React from 'react'
import AddL from '../components/LostAndFound/Add';
import ScrollToTop from '../components/ScrollToTop';
import Lfstate from '../components/LostAndFound/Lcontext/Lfstate';
const AddLPage = () => {
  return (
    <>
    <Lfstate>
    <ScrollToTop/>
      <AddL/>
      </Lfstate>
    </>
  )
}

export default AddLPage;