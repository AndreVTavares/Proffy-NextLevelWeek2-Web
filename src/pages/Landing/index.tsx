import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import ladingImg from '../../assets/images/landing.svg';

const Landing = () => {
  return (
      <div id="page-landing">
          <div id="page-landing-content" className="container">
              <div className="logo-container">
                  <img src={logoImg} alt="logo proffy"/>
                  <h2>Sua plataforma de estudos online.</h2>
              </div>
              <img src={ladingImg} alt="plataforma de estudos" className="hero-image"/>
          </div>
      </div>
  );
};

export default Landing;
