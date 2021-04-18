import React from 'react';
import GitHubButton from 'react-github-btn';

const Header = () => {
    return (
        <div className="header">
            <img className="header-avatar" src="./img/avatar.png" alt="avatar" />
            <div className="content">
                <div className="header-title">
                    <h1>Hello,</h1>
                    <h2>Je suis Teddy Techer, <br></br>Développeur Web</h2>
                    <h3>Front-End / ReactJS</h3>
                    <GitHubButton className="button-git" href="https://github.com/teddy-techer">Suivre sur GitHub</GitHubButton>
                </div>
            </div>
        </div>
    );
};

export default Header;