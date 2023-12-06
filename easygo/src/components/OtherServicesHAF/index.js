import React,{ useState }  from 'react'
import Footer from '../Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Products from './Products';
import productData from './Products/data';
import Hfcontext from './Hcontext/Hfcontext';
import { useContext,useEffect} from 'react'

const OtherServicesHAF = () => {
  const [isOpen,setIsOpen] = useState(false);
  const context=useContext(Hfcontext);
  const{notes,getHelp}=context;
  

  useEffect(() => {
   
      getHelp();
     
     }, [])

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
  <>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
  <Navbar toggle={toggle} />
  <Products heading="Help A Friend" data={notes}/>
  <Footer/>
  </>   
  )
}   

export default OtherServicesHAF;