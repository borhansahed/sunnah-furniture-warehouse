import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase-init';
import { HiOutlineMenuAlt2} from "@react-icons/all-files/hi/HiOutlineMenuAlt2";
import './Header.css'
import NavLinks from './NavLinks';

const Header = () => {
    const [open, setOpen] = useState(false);

    // const hamburger = (menu) =>{
    //     setHamburgerMenu({menu})
    // }
    return (
        <>


<div className='header-title lg:text-center'>
<div >
                <p className='menu'><HiOutlineMenuAlt2 onClick={()=>setOpen(!open)}></HiOutlineMenuAlt2></p>
               </div>
               <div className='header-main-title'>
                   <p className='fst-italic'> <small>since 1900</small> 
               </p><span><h1 className=' fst-italic fw-bold' >Sunnah</h1></span>
               </div>
            
               
             
                   
                </div> 

        
        <div className='header-container'>
            <NavLinks></NavLinks>
      
        
          </div>
          
        
     
          <div className='hamburger-menu shadow-xl'>

      {
        open &&   <NavLinks></NavLinks>
      }
          
           
          </div>
        
        
          
        </>
        
    );
};

export default Header;