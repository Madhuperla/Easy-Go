import React,{ useState }  from 'react'
import Footer from '../Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Products from './Products';
import productData from './Products/data';
import Tkcontext from './Tkcontext/Tkcontext';
import { useContext,useEffect} from 'react'
const OtherServicesEBT = () => {
  const [isOpen,setIsOpen] = useState(false);
  const context=useContext(Tkcontext);
  const{notes,getTicket}=context;
  

  useEffect(() => {
   
      getTicket();
     
     }, [])


  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
  <>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
  <Navbar toggle={toggle} />
  <Products heading="Extra Bus Tickets" data={notes}/>
  <Footer/>
  </>   
  )
}   

export default OtherServicesEBT;