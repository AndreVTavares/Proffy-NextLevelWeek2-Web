import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/31252029?s=460&u=f18e74c573f5755d6d266c06af0809c2ab52d526&v=4"
          alt="André Tavares"
        />
        <div>
          <strong>André Tavares</strong>
          <span>Transfiguração</span>
        </div>
      </header>

      <p>
        Mestre em transfiguração discipulo de Minerva McGonagall.
        <br /> <br />
        Apaixonado pela magia de mudança de formas e os ensinamentos para melhor
        utilizar desse artificio mágico.
      </p>

      <footer>
        <p>
          Preço/hora:
          <strong>R$ 83,00</strong>
        </p>
        <button type="button">
          <img src={whatsIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
