import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import CollegeUpdates from '../components/CollegeUpdates'
import Custate from '../components/CollegeUpdates/Ccontext/Custate';
import Authstate from '../components/Acontext/Authstate';
const CollegeUpdatesPage = () => {
  return (
  <>
  <Authstate>
  <Custate>
    <ScrollToTop/>
    <CollegeUpdates/>
    </Custate>
    </Authstate>
  </>
  )
}

export default CollegeUpdatesPage