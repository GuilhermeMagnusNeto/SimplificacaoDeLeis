import './PaginaInicial.css'
import React from 'react';
import { Link } from 'react-router-dom';

const PaginaInicial = () => {
  return (
    <div className="app">
      <div id="pergunta">
        <h1 id='titulo'>LNV.IA</h1>
        <form id='formulario'>
          <input type='text' id='caixaDePesquisa' placeholder='Escreva sua duvida aqui '></input>
          <button type='submit' id='botao'>Pesquisar</button>
          <p id='textoDuvida'>Em dúvida de <Link to="/segunda">como funciona?</Link></p>
        </form>
      </div>
      <div id='localDaResposta'>
        <h2 id='tituloResposta'>Resposta</h2>
        <p id='resposta'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis iaculis est a tincidunt. Quisque sem augue, iaculis sit amet feugiat quis, suscipit in eros. Nunc a rhoncus est, vitae cursus augue. In eu elit pulvinar, aliquam dui sit amet, rhoncus massa. Mauris tempus et nunc at fringilla. Vestibulum venenatis leo in arcu pulvinar, nec consequat augue aliquam. Nullam eros urna, ultrices non mauris et, pharetra ullamcorper orci. Phasellus gravida condimentum magna ac fermentum. Aliquam mattis eros a posuere pulvinar. Nulla in enim felis. Duis semper, erat sed faucibus eleifend, quam ante scelerisque lacus, non commodo metus erat non neque. Ut ligula ante, consectetur et sagittis quis, suscipit eu magna. Morbi ultrices magna augue, ac rhoncus lorem pharetra sed.
        Curabitur vitae malesuada nulla, a commodo odio. Vivamus sapien ligula, condimentum nec tempus ut, consectetur ultrices ipsum. Praesent eget eros ut ipsum hendrerit euismod ut eget mauris. Pellentesque imperdiet metus vel turpis dapibus, nec rutrum felis eleifend. Morbi malesuada enim odio, sed hendrerit nisl venenatis eu. Morbi suscipit nec nulla eget interdum. Donec tempus mauris ipsum, eget feugiat mi congue ut. Ut in massa ut nibh euismod sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sed malesuada dui.
        Vivamus sit amet nisl ut ipsum dapibus posuere. Ut tincidunt malesuada ex, quis porta ante sollicitudin vel. Curabitur euismod metus vel tempus egestas. Nulla vitae diam euismod, dapibus lectus eu, lacinia lectus. Nam ut euismod quam. Donec id nibh tincidunt, condimentum dui varius, placerat sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer diam mauris, viverra eget tristique sed, tristique vel felis. Duis malesuada purus tristique lorem suscipit cursus. Quisque varius congue mauris, vel vulputate orci facilisis eu. Maecenas nec elit tincidunt nunc euismod ullamcorper. Vestibulum dapibus vestibulum tellus. Aliquam malesuada turpis in sodales efficitur.
        </p>
      </div>
    </div>
  );
};

export default PaginaInicial;