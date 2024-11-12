// Etapa3.js
import React from 'react';

export default function Etapa3({ onChange, data }) {
  const handleInputChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Etapa 3: Informações Adicionais</h2>
      <label>
        Número do Pedido (se aplicável):
        <input type="text" name="numeroPedido" value={data.numeroPedido || ''} onChange={handleInputChange} />
      </label>
      <label>
        Data da Ocorrência:
        <input type="date" name="dataOcorrencia" value={data.dataOcorrencia || ''} onChange={handleInputChange} />
      </label>
    </div>
  );
}


