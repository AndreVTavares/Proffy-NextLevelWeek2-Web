import React from 'react';

import './styles.css'

import logoImg from '../../assets/images/logo.svg';
import ladingImg from '../../assets/images/landing.svg';
import studyImg from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

const Landing = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="logo proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={ladingImg}
          alt="plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <a href="/" className="study">
            <img src={studyImg} alt="estudar" />
            Estudar
          </a>
          <a href="/" className="give-classes">
            <img src={giveClassesIcon} alt="Dê aulas" />
            Dar Aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
