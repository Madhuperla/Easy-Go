import React,{useState, useEffect}   from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { Nav,NavLogo,NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink,NavButton } from './NavbarElements'
import { useNavigate } from 'react-router-dom'
const Navbar = ({toggle}) => {

  const [scrollNav,setScrollNav]=useState(false);
  //const [status ,setStatus]=useState("Log In")

  const changeNav=()=>{
    if(window.scrollY>=80){
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  }
  let token=localStorage.getItem("token");
  console.log(token);
  
 
  const history=useNavigate()
 
 const handleClick=async(e)=>{
   e.preventDefault();
  
   
    if(token==null){
    
     history("/signin")
 
    }
    else{
     
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      window.location.reload(true)
     console.log("logged out")
     
    }
 }
 const handleProfile=async(e)=>{
  e.preventDefault();
 
  
   if(token==null){
   
    history("/signin")

   }
   else{
    
    history("/dashboard")

    
   }
}
 

  useEffect(() => {
      window.addEventListener('scroll', changeNav)
  },[])

  const toggleHome=() =>{
    scroll.scrollToTop();
  };


  return (
    <>
    <IconContext.Provider value={{color: "#fff"}}>
    <Nav scrollNav={scrollNav}>
      <NavbarContainer> 
        <NavLogo to='/' scrollNav={scrollNav} onClick={toggleHome}>
            EasyGo
        </NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="travelbuddy"
            smooth={true} duration={500} spy={true} exact='true' offset={-80} scrollNav={scrollNav}
            >TravelBuddy</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="lostandfound"
            smooth={true} duration={500} spy={true} exact='true' offset={-80} scrollNav={scrollNav} >Lost&found</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="collegeupdates"
            smooth={true} duration={500} spy={true} exact='true' offset={-20} scrollNav={scrollNav}
            >CollegUpdates</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services"
            smooth={true} duration={500} spy={true} exact='true' offset={0} scrollNav={scrollNav}>Services</NavLinks>
          </NavItem>
          
            
        </NavMenu>
        <NavBtn >
            {/* <NavBtnLink to="/signin"scrollNav={scrollNav}>Log In</NavBtnLink> */}
            <NavButton onClick={handleClick} scrollNav={scrollNav}>{token==null?"Log In":"Log Out"}</NavButton>
            
        </NavBtn>
        <NavBtn >
            
            <NavButton onClick={handleProfile} scrollNav={scrollNav}>Profile</NavButton>
            
         </NavBtn> 
        

      </NavbarContainer>
    </Nav>
    </IconContext.Provider> 
    </>
  )
}

export default Navbar