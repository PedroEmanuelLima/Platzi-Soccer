import React from 'react';

import '../styles/NewRequest.css'
import '../styles/bootstrap.min.css';

import {NavBarLeft} from './NavBar';
import {RetangleNewRequest} from './Retangle';

const listaDeProdutos = [1,2,3,4,5,6,7,8,9]

const NewRequest = props =>{

    let mesa = '03';
    let items = 2;
    let total = 50.00;
    

    return(
        <>
            <nav className="nav-bar">
                <NavBarLeft frase={`Pedido para a mesa ${mesa}`}/>
                
                <div className='nav-right  col-6'>
                    <div className="btn-red">
                        <button>Encerrer reserva</button>
                        <button className=" ml-4">Total: R$ {total}</button>
                    </div>
                    <div className="btn-green mt-4">
                        <button>Finalizar pedido</button>
                    </div>
                </div>
            </nav>

            <p style={{
            textAlign: 'end',
            paddingRight: '3em',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '24px',
            lineHeight: '28px'
            }}>
                <span style={{
                    color: '#BA2A2A'
                }}>{items}</span> Itens selecionados
            </p>

            <RetangleNewRequest product={listaDeProdutos}/>

        </>
    );
}

export default NewRequest;