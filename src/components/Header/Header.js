
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt2} from "@react-icons/all-files/hi/HiOutlineMenuAlt2";
import './Header.css'
import NavLinks from './NavLinks';
import { useEffect } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    const hamburgerMenu = useRef(null);
    const hamburgerLinks = useRef(null);

    useEffect(()=>{
    const useOutsideClick = event =>{
     if(hamburgerLinks.current.contains(event.target)){
        setOpen(true);
     }
     else if (!hamburgerMenu.current.contains(event.target)){
        setOpen(false)

     }
    }

        document.body.addEventListener('click',useOutsideClick)

        return()=>{
            document.body.removeEventListener('click',useOutsideClick)
        }
    },[])

    return (
        <div className='navbar-container'>


<div className='header-title lg:text-center'>
<div ref={hamburgerMenu} onClick={()=>setOpen(!open)} className='menu'>
                <HiOutlineMenuAlt2></HiOutlineMenuAlt2>
               </div>
               <div className='header-main-title'>
                <Link className='' to="/">
                   <p className='fst-italic'> <small>since 1900</small> 
               </p><span><h1 className=' fst-italic fw-bold' >Sunnah</h1></span></Link>
               </div>
            
               
             
                   
                </div> 

        
        <div className='header-container'>
            <NavLinks></NavLinks>
      
        
          </div>
          
         
     
          
<div ref={hamburgerLinks} className='hamburger-menu'>
   {
        open && <NavLinks></NavLinks>
      }  
  
</div>
     
          
           
      
        
        
          
        </div>
        
    );
};

export default Header;