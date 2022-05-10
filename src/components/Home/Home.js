import React from 'react';
import Banner from '../Banner/Banner';
import EidSpeicial from '../EidSpeicial/EidSpeicial';
import Items from '../Items/Items';
import InventoryItems from '../InventoryItems/InventoryItems';
import SecondBanner from '../SecondBanner/SecondBanner';
import HomeProduct from '../HomeProuduct/HomeProduct';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <EidSpeicial></EidSpeicial>
       
    <HomeProduct></HomeProduct>
       <SecondBanner></SecondBanner>
        </div>
    );
};

export default Home;