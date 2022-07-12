import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase-init';
import './Header.css'

const NavLinks = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () =>{
        signOut(auth);
    }
    return (
       <div className='header-links-container'>
       <div className='header-links'>
                <Link to="/home">Home</Link>
                <Link to="/inventory">Inventory</Link>
                
                {
                    user && <Link to="/additems">Add Item</Link> 
                }
                {
                    user ? <Link to="/manageinventory">Managed Items</Link> :<Link to="/manageinventory">Manage Inventory</Link>
                }
          </div>  
             <div className='header-links2'>
             <Link to="/blogs">Blogs</Link>
             <Link to="/about">About</Link>
                 {
                     user && <Link to="/myitems">My Items</Link>
                 }
            {
                user ? <button onClick={handleLogout} className='btn btn-outline-dark'>Logout</button> : <Link to="/login">Login</Link>
            }
  
             </div>
                 
       </div>
    );
};

export default NavLinks;