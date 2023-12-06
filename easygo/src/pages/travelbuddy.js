import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import TravelBuddy from '../components/TravelBuddy'
import Tbstate from '../components/TravelBuddy/Tcontext/Tbstate';
const TravelBuddyPage = () => {
  return (
    <>
    <Tbstate>
    <ScrollToTop/>
    <TravelBuddy/>
    </Tbstate>
    </>
  )
}

export default TravelBuddyPage