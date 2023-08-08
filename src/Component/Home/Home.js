import React from 'react';
import ProductAll from '../ProductAll/ProductAll';
import Banner from '../Banner/Banner';
import ProductCategories from '../Categories/ProductCategories';
import Commitment from '../Commitment/Commitment';
import TopBrands from '../../Top Brands/TopBrands';


const Home = () => {
    return (
        <div>
            <Banner/>
            <ProductCategories/>
            <ProductAll/>
            <TopBrands/>
            <Commitment/>
        </div>
    );
};

export default Home;