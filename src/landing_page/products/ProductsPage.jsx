import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductsPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <LeftSection />
            <RightSection />
            <Universe />
        </>
    );
}

export default ProductsPage;