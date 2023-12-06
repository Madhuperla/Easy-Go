import React from 'react'
import EditL from '../components/LostAndFound/Edit';
import ScrollToTop from '../components/ScrollToTop';
import Lfstate from '../components/LostAndFound/Lcontext/Lfstate';
const EditLPage = () => {
  return (
    <>
    <Lfstate>
    <ScrollToTop/>
      <EditL/>
      </Lfstate>
    </>
  )
}

export default EditLPage;