

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth'
import InventoryItems from './components/InventoryItems/InventoryItems'
import NotFound from './components/NotFound/NotFound';
import ManageInventory from './components/ManageInventory/ManageInventory';
import MyItems from './components/MyItems/MyItems';
import AddItems from './components/AddItems/AddItems';
import Inventory from './components/Inventory/Inventory';


function App() {
  return (
    <>
    <Header></Header>
  <Routes>
 <Route path='/' element={<Home></Home>}></Route>
 <Route path='/home' element={<Home></Home>}></Route>
 <Route path='/login' element={<Login></Login>}></Route>
 <Route path='/register' element={<Register></Register>}></Route>
 <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
 <Route path='/myitems' element={<MyItems></MyItems>}></Route>
 <Route path='/additems' element={<AddItems></AddItems>}></Route>
 <Route path='/inventory' element={
   <RequireAuth>
    <Inventory></Inventory>
   </RequireAuth>
 }></Route>
  <Route path='*' element={<NotFound></NotFound>}></Route>
 
  </Routes>
  
  
    </>
    
  );
}

export default App;
