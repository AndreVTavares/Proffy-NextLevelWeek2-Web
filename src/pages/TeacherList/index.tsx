import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';

import './styles.css';

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Educação Fisica', label: 'Educação Fisica' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Geografica', label: 'Geografica' },
              { value: 'Historia', label: 'Historia' },
              { value: 'Portugues', label: 'Portugues' },
              { value: 'Quimica', label: 'Quimica' },
            ]}
          />

          <Select
            name="week-day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabado' },
            ]}
          />

          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
