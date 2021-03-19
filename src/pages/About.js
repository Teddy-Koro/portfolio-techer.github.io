import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="about">
            <Header />
            <Navigation />
            <div className="about-container">
                <h1>A propos</h1>
                <p>
                    Per etiam fulgente viles luna ut instar repugnantibus noctes ut mari haecque Tullius per fame eisdem aliquando loca montibus seseque incendente mari repentes perpetrata solido sunt aliquando nauticos arduis quadrupedo avertebant homines adsistebant cornuta ferae repugnantibus non in et sese non montibus ideoque degressi seseque ut viles incendente latebrosis merces.
                </p>
                <p>
                    Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;