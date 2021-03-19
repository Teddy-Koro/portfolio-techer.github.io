import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <img className="header-avatar" src="./img/avatar.png" alt="header" />
            <div className="header-title">
                <h1>Développeur Web</h1>
                <h2>Front-End / ReactJs</h2>
            </div>
        </div>
    );
};

export default Header;