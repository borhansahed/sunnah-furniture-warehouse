

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth'
import InventoryItem from './components/InventoryItem/InventoryItem'
import NotFound from './components/NotFound/NotFound';
import ManageInventory from './components/ManageInventory/ManageInventory';
import MyItems from './components/MyItems/MyItems';
import AddItems from './components/AddItems/AddItems';
import Inventory from './components/Inventory/Inventory';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    <Header></Header>
  <Routes>
 <Route path='/' element={<Home></Home>}></Route>
 <Route path='/home' element={<Home></Home>}></Route>
 <Route path='/inventory' element={
   <RequireAuth>
    <Inventory></Inventory>
   </RequireAuth>
 }></Route>
 <Route path='/login' element={<Login></Login>}></Route>
 <Route path='/register' element={<Register></Register>}></Route>
 <Route path='/manageinventory' element={
 <RequireAuth>
<ManageInventory/>
 </RequireAuth>
 }></Route>
 <Route path='/blogs' element={<Blogs></Blogs>}></Route>
 <Route path='/about' element={<About></About>}></Route>
 
 <Route path='/additems' element={<AddItems></AddItems>}></Route>
 
 <Route path='/inventory/:id' element={<InventoryItem></InventoryItem>}></Route>
 <Route path='/myitems' element={<MyItems></MyItems>}></Route>
  <Route path='*' element={<NotFound></NotFound>}></Route>
 
  </Routes>
  <Toaster />
<Footer></Footer>
  
    </>
    
  );
}

export default App;
