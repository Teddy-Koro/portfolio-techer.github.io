import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="about">
            <Header />
            <Navigation />
            <div className="about-content">
                <h1>A propos</h1>
                <p>
                Après quelques années dans le domaine du transport et de la relation client, j'ai pris la décision de faire une reconversion professionnelle dans ledéveloppement web.
                Pour cela j'ai entrepris une formation de développement web à l'école O'Clock (Labellisée Grande Ecole du Numérique).
                <br></br>
                <br></br>
                Dans la continuité de mon projet de reconversion je suis à la recherche d'un(e) stage/alternance afin de me constituer un socle solide decompétences techniques. 
                <br></br>
                Cela en vue de développer mon savoir-faire et macréativité, aiguiser mes softs skills, en bénéficiant du côté humain etcollaboratif du métier.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;