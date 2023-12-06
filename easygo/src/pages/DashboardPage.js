import React from 'react'
import Dashboard from './Dashboard.js';
import ScrollToTop from '../components/ScrollToTop';
import Dstate from '../components/Dashcontext/Dashstate';
import Authstate from '../components/Acontext/Authstate'

const DashboardPage = () => {
  return (
    <>
    <Authstate>
    <Dstate>
    <ScrollToTop/>
      <Dashboard/>
      </Dstate>
      </Authstate>
    </>
  )
}

export default DashboardPage;