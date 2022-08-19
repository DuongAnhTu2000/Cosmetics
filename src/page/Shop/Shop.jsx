import '../../scss/layout/Header';
import Header from '../../scss/layout/Header';
import BreadCrumb from '../../scss/layout/BreadCrumb';
import MainProduct from './MainShop';
import Footer from '../../scss/layout/Footer';
import React from 'react';
import { useState } from 'react';
function Shop() {
    const [title] = useState({
        shop: 'Shop',
    });
    return ( 
        <div>
            <Header />
            <BreadCrumb title={title.shop}/>
            <MainProduct  />
            <Footer  />
        </div>
     );
}

export default Shop;