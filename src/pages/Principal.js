import React from 'react';

import {NavBar} from './NavBar';
import ManageOrders from './ManageOrders';
import {RetanglePrincipal} from './Retangle';

const listaDeProdutos = [1,2,3,4,5,6,7,8,9]

const Principal =() => (
    <>
      <NavBar saudacao="Bem vindo(a) a pizzaria vap "/>
      <ManageOrders />
      <RetanglePrincipal product={listaDeProdutos}/>
    </>
  );
  
  export default Principal;
  