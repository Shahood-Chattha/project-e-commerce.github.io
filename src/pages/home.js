import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Testimonials from "../components/testimonials";
import HeroSection from "../components/hero";
import ProductCardCarousel from "../components/common/productcardcarousel";


function Home() {

    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/')
        }

        if (!authToken) {
            navigate('/authentication/login')
        }
    }, [])

    return (
        <div className="pt-4">
            <Helmet>
                <title>Home</title>
                <meta name="description" content='Home page' />
                <link rel='canonical' href='/' /> 
            </Helmet>
            <HeroSection/>
            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto'}} >
                <ProductCardCarousel show={3} infiniteLoop={true} />
            </div>
            <div>
                <Testimonials />
            </div>
        </div>
    )
}

export default Home;
