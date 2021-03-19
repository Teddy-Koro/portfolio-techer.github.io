import React from 'react';
import GitHubButton from 'react-github-btn';

const Footer = () => {
    return (
        <div className="footer">
            <GitHubButton className="button-git" href="https://github.com/Teddy-Koro">Suivre sur GitHub</GitHubButton>
            <p>
                Techer Teddy © 2021 
            </p>
        </div>
    );
};
export default Footer;
