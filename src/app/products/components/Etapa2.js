// Etapa2.js
import React from 'react';

export default function Etapa2({ onChange, data }) {
  const handleInputChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Etapa 2: Detalhes da Reclamação</h2>
      <label>
        Assunto da Reclamação:
        <input type="text" name="assunto" value={data.assunto || ''} onChange={handleInputChange} />
      </label>
      <label>
        Descrição:
        <textarea name="descricao" value={data.descricao || ''} onChange={handleInputChange}></textarea>
      </label>
    </div>
  );
}

