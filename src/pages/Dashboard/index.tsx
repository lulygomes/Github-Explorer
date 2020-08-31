import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios do Github </Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/39559790?s=400&u=717ae4781828256277ecda1eb848ad4d04fc0d6d&v=4"
            alt="Luiz silva"
          />
          <div>
            <strong>nivel-2-desafio-2</strong>
            <p>Desafio 2 do segundo nível do BootCamp do Rocketseat </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/39559790?s=400&u=717ae4781828256277ecda1eb848ad4d04fc0d6d&v=4"
            alt="Luiz silva"
          />
          <div>
            <strong>nivel-2-desafio-2</strong>
            <p>Desafio 2 do segundo nível do BootCamp do Rocketseat </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/39559790?s=400&u=717ae4781828256277ecda1eb848ad4d04fc0d6d&v=4"
            alt="Luiz silva"
          />
          <div>
            <strong>nivel-2-desafio-2</strong>
            <p>Desafio 2 do segundo nível do BootCamp do Rocketseat </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
