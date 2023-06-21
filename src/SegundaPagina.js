import React from 'react';
import './SegundaPagina.css'
import { Link } from 'react-router-dom';

const SegundaPagina = () => {
  return (
    <div id='localDaResposta'>
        <h2 id='comoFunciona'>Como funciona?</h2>
        <p id='resposta'>Esta aplicação é um auxiliador na compreensão de leis e artigos e funciona de maneira muito simples. Basta inserir no campo de busca a lei que você gostaria que fosse 
        reescrita de maneira mais simples e direta, aguardar alguns instantes, e pronto, a lei que você digitou agora foi reescrita utilizando inteligência artificial facilitando assim
        seus estudos e entendimento!
        </p>
        <Link id='botao' to='/'>Voltar</Link>
    </div>
  );
};

export default SegundaPagina;