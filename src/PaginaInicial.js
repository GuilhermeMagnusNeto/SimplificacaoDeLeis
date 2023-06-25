import './PaginaInicial.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaginaInicial = () => {
  const [resposta, setResposta] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const texto = document.getElementById('caixaDePesquisa').value;

    fetch('http://localhost:5000/processar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ texto: texto }),
    })
      .then((response) => response.text())
      .then((data) => {
        setResposta(decodeURIComponent(JSON.parse(data)));
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };

  return (
    <div className="app">
      <div id="pergunta">
        <h1 id="titulo">LNV.IA</h1>
        <form id="formulario" onSubmit={handleSubmit}>
          <input type="text" id="caixaDePesquisa" placeholder="Escreva sua dúvida aqui"></input>
          <button type="submit" id="botao">Pesquisar</button>
          <p id="textoDuvida">Em dúvida de <Link to="/segunda">como funciona?</Link></p>
        </form>
      </div>
      <div id="localDaResposta">
        <h2 id="tituloResposta">Resposta</h2>
        <p id="resposta" dangerouslySetInnerHTML={{ __html: resposta }}></p>
      </div>
    </div>
  );
};

export default PaginaInicial;
