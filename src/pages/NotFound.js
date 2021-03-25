import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div className="notFound">
            <Header />
            <Navigation />
            <div className="container">
                <h3>Oup's</h3>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;