import '../../scss/layout/Header';
import Header from '../../scss/layout/Header';
import BreadCrumb from '../../scss/layout/BreadCrumb';
import MainProduct from './MainProduct';
import ModalPage from '../../scss/component/Modal';
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
            <ModalPage  />
            <Footer  />
        </div>
     );
}

export default Shop;