import React from 'react'
import { SidebarContainer,Icon,CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="travelbuddy" onClick={toggle}>TravelBuddy</SidebarLink>
            <SidebarLink to="lostandfound" onClick={toggle}>Lost&Found</SidebarLink>
            <SidebarLink to="collegeupdates" onClick={toggle}>CollegUpdates</SidebarLink>
            <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          </SidebarMenu>

          <SideBtnWrap>
            <SidebarRoute to='/signin'>
              Sign In
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;