import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Home =() => {
    return (
        <div className="home">
            <Header />
            <Navigation />
            <Projects />
            <Footer />
        </div>
    );

};

export default Home;