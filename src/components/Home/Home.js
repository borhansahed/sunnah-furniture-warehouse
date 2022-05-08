import React from 'react';
import Banner from '../Banner/Banner';
import EidSpeicial from '../EidSpeicial/EidSpeicial';
import Items from '../Items/Items';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <EidSpeicial></EidSpeicial>
       
       <InventoryItems></InventoryItems>
        </div>
    );
};

export default Home;