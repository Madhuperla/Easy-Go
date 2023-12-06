import React,{ useState }  from 'react'
import Footer from '../Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Products from './Products';
import productData from './Products/data';
import LFcontext from './Lcontext/LFcontext';
import { useContext,useEffect} from 'react'

const LostAndFound = () => {
  const [isOpen,setIsOpen] = useState(false);
  const context=useContext(LFcontext);
  const{notes,getItem}=context;
  

  useEffect(() => {
   
      getItem();
     
     }, [])
  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
  <>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
  <Navbar toggle={toggle} />
  <Products heading="Lost And Found" data={notes}/>
  <Footer/>
  </>   
  )
}

export default LostAndFound;