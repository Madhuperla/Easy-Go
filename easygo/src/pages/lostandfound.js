import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import LostAndFound from '../components/LostAndFound';
import Lfstate from '../components/LostAndFound/Lcontext/Lfstate';
const LostAndFoundPage = () => {
  return (<>
    <Lfstate>
    <ScrollToTop/>
    <LostAndFound/>
    </Lfstate>
    </>
  )
}

export default LostAndFoundPage;