import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../components/firebase-init';

const UseMyItem  = () =>{
  const [items, setItems] = useState([])
    const [user] = useAuthState(auth);
    const url = `http://localhost:5000/myItems/${user?.email}`


    useEffect(() => {
     fetch(url)
     .then(res => res.json())
     .then(data => setItems(data))

    }, [])
     return [items, setItems];

}

export default UseMyItem;