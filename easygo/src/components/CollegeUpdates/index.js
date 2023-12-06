import React,{ useState }  from 'react'
import Footer from '../Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Products from './Products';
import ProductData from './Products/data';
import CUcontext from './Ccontext/CUcontext';
import { useContext,useEffect} from 'react'


const CollegUpdates = (props) => {
  const [isOpen,setIsOpen] = useState(false);
  const context=useContext(CUcontext);
  const{notes,getEvent}=context;
  

  useEffect(() => {
   
      getEvent();
     
     }, [])

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
  <>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
  <Navbar toggle={toggle} />
  <Products heading="College Updates" data={notes}/>
  <Footer/>
  </>   
  )
}   

export default CollegUpdates;