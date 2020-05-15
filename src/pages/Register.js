import React from 'react';

import '../styles/Register.css';
import urlReturn from '../image/return.svg';
import urlNav from '../image/logo.svg'
import { Link } from 'react-router-dom';

const Register = () =>{ 
    return (
        <div>
            <nav style={{
                marginLeft: '8%'
            }}>
                <img src={urlNav} alt="logo"/>
            </nav>            
            <div className="body-register">
                <div className="titles mt-5 col-4">
                    <div>
                        <h1>Faça seu registro, fácil e rápido</h1 >
                    </div>
                    <div>
                        <h3>Chegou a hora de dar um gás nas suas comandas!!</h3>
                    </div>
                </div>

                <form className="from-group container-information col-8 ">
                    <div className="form-control container-enter">
                        <input type='text' className="input-info" placeholder='Nome do estabelecimento'/>
                    </div>
                    <div className="form-control container-enter">
                        <input type='text' className="input-info" placeholder='Email'/>
                    </div>
                    <div className="container-enter btn-secondary">
                        <button type='submit' className="btn">CADASTRAR</button>
                    </div>
                </form>
            </div>

            <div className="return ml-2">
                <p className="link-return">
                    <Link to="/Login" className="mr-2" style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.7)'}}>
                        <img src={urlReturn} alt="return" />
                        Voltar para login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
