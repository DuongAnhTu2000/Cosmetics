import Header from '../../scss/layout/Header';
import BreadCrumb from '../../scss/layout/BreadCrumb';
import MainCart from './MainCart';

import Footer from '../../scss/layout/Footer';
import React from 'react';
import { useState } from 'react';
function Cart() {
    const [title] = useState({ 
        cart: 'Cart',
        title: 'Return to shop',
    });
    return ( 
        <div>
            <Header />
            <BreadCrumb title={title.cart}/>
            <MainCart  />
            <Footer  /> 
        </div>
     );
}

export default Cart