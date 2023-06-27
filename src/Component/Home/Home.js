import React from 'react';
import ProductAll from '../ProductAll/ProductAll';
import Banner from '../Banner/Banner';
import ProductCategories from '../Categories/ProductCategories';
import Commitment from '../Commitment/Commitment';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
           <ProductAll></ProductAll>
           <Commitment/>
        </div>
    );
};

export default Home;