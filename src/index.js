import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { SkeletonTheme } from 'react-loading-skeleton';
import {BrowserRouter as Router} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from 'react-use-cart';

import App from './App';

ReactDOM.render(
    <CartProvider>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Router>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </Router>
    </SkeletonTheme>
    </CartProvider>,
    document.getElementById('root')
);
