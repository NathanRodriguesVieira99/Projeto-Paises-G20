import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Agendas = ({ agendamentos }) => {
  const agendamentosOrdenados = Array.isArray(agendamentos) ? [...agendamentos].sort((a, b) => new Date(a.dataHora) - new Date(b.dataHora)) : [];

  return (
    <div>
      <h2>Lista de Apresentações Agendadas</h2>
      {agendamentosOrdenados.length > 0 ? (
        <ul>
          {agendamentosOrdenados.map((apresentacao, index) => {
            const dataHora = new Date(apresentacao.dataHora);
            return (
              <li key={index}>
                <p><strong>Data e Hora:</strong> {dataHora.toLocaleString()}</p>
                <p><strong>País:</strong> {apresentacao.autoridade.split('/')[0]}</p>
                <p><strong>Autoridade - Cargo:</strong> {apresentacao.autoridade.split('/')[1]} - {apresentacao.autoridade.split('/')[2]}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Não há agendamentos disponíveis.</p>
      )}
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Agendas;
