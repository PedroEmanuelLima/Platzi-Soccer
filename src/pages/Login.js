import React from 'react';
import {Link} from 'react-router-dom';

import {NavBarLeft} from './NavBar';
import urlRegister from'../image/register.svg';

import '../styles/Login.css';
import '../styles/bootstrap.min.css';

const Retangle = () =>{

    return (
        <div className="container">
            <NavBarLeft />
            <div className="make-login mb-5">
                <h1>Faça o seu login</h1>
            </div>

            <form className="container make-login">
                    <div className="form-group container-enter">
                        <input type='text' className="input-ID" placeholder='ID do seu estabelecimento'/>
                    </div>
                    <div className="container-enter mt-4">
                        <button className="btn btn-enter" type='submit'>ENTRAR</button>
                    </div>
            </form>

            <div className="register mt-4">
                <Link to='/Register' className="click-register" style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.7)'}}>
                    <img src={urlRegister} className="mr-2" alt="Register"/>
                    Ainda não tenho cadastro
                </Link>
            </div>
        </div>
    );
}
export default Retangle;
