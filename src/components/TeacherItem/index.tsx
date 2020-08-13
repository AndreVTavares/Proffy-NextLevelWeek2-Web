import React, { FC } from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
  name: string;
  id: number;
  avatar: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora:
          <strong>R${teacher.cost}</strong>
        </p>
        <a href={`https://wa.me/55${teacher.whatsapp}`} target="_blank">
          <img src={whatsIcon} alt="whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
