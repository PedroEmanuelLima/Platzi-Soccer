import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/bootstrap.min.css';
import '../styles/NewProduct.css';

import urlPast from '../image/past.svg';
import urlReturn from '../image/return.svg';

const NewPoduct = () =>{ 
    return (
        <div className="m-3">
            <div className="col">
                <h2 className="my-title">
                   Cadastrar novo Produto
                </h2>
            </div>
            <div className="container-div col-md">
                <div className="col-6">
                    <h4 className="my-subtitle">
                        Cadastre um novo produto e aproveite as facilidades
                    </h4>
                </div>
                <form className="container-end col-sm-12 col-md-5">
                    <div className="container-image">
                        <div className="div-past">
                            <input type="file"  className="input-image"/>
                            <img src={urlPast} value="" alt="past"/>
                        </div>
                        <p className="text-img">IMAGEM</p>
                    </div>
                    <div className="container-description">
                        <input type="text" placeholder="DESCRIÇÃO" className="input-description"/>
                    </div>
                    <div className="container-description">
                        <input type="number" placeholder="PREÇO" className="input-description"/>                     
                    </div>
                    <div className="container-description btn-secondary">
                        <button type="submit" className="btn">SALVAR</button>
                    </div>
                </form>
            </div>

            <div className="return">
                <Link to="/" style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.7)'}}>
                    <p className="link-return">
                        <img src={urlReturn} className="mr-2 ml-4" alt="return" />
                        Voltar a lista de produtos
                    </p>
                </Link>
            </div>

        </div>
    );
}
export default NewPoduct;
