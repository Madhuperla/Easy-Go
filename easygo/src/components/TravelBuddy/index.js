import React, {useState}  from 'react'
import Footer from '../Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Products from './Products';
import productData from './Products/data';
import TBcontext from './Tcontext/TBcontext';
import { useContext,useEffect} from 'react'
const TravelBuddy = () => {
  const [isOpen,setIsOpen] = useState(false);
  
  const context=useContext(TBcontext);
  const{notes,getTravel}=context;
  

  useEffect(() => {
   
      getTravel();
     
     }, [])
  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
  <>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
  <Navbar toggle={toggle} />
  <Products heading="TravelBuddy" data={notes}/>
  <Footer/>
  </>   
  )
}

export default TravelBuddy;