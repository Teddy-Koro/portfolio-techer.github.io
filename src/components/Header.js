import React from 'react';
import GitHubButton from 'react-github-btn';

const Header = () => {
    return (
        <div className="header">
            <img className="header-avatar" src="./img/avatar.png" alt="avatar" />
            <div className="content">
                <div className="header-title">
                    <h1>Hello, Je suis Teddy, Développeur Web</h1>
                    <h2>Front-End / ReactJS</h2>
                    <GitHubButton className="button-git" href="https://github.com/Teddy-Koro">Suivre sur GitHub</GitHubButton>
                </div>
            </div>
           
        </div>
    );
};

export default Header;