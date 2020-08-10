import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import ladingImg from '../../assets/images/landing.svg';
import studyImg from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

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
          <Link to="/study" className="study">
            <img src={studyImg} alt="estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dê aulas" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
