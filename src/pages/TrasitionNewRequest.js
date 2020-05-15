import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/TrasitionNeRequest.css';
import '../styles/bootstrap.min.css'
import urlReturn from '../image/return.svg';

const TrasitionNewRequest = () =>{

    return (
        <div className="div-body">
            <div className="container" >
                <div>
                    <h1 className="title">Pedidos</h1>
                </div>
                <div>
                    <h3 className="sub-title">Faça um novo pedido, ou continue servindo à alguma mesa.</h3>
                </div>
                <div>
                    <form>
                        <div className="content-input mt-5">
                            <input type="number" className="number-table" placeholder="Numero da mesa"/>
                        </div>
                        <div className="content-btn">
                            <button type='submit' className="continues">
                                Continuar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="return-trasition btn">
                <p className="link-return">
                    <Link to="/" style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.7)'}}>
                        <img src={urlReturn} alt="return" className="mr-2"/>
                        Voltar a lista de produtos
                    </Link> 
                </p>
            </div>
        </div>
);
}

export default TrasitionNewRequest;
