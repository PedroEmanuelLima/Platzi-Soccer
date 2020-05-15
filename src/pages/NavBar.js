import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/bootstrap.min.css';
import '../styles/NavBar.css';

import urlLogo from '../image/logo.svg';
import urlLogOut from '../image/logout.svg';

const NavBarLeft = (props) =>{  
    return (
        <div className='container nav-left'>
            <img src={urlLogo} alt="Logo" style={{
                marginTop: -5
            }}></img>
            <p style={{
                marginLeft: '2%'
            }}>{typeof props.frase !== 'undefined'
                ? props.frase
                : ""
            }
            </p>
        </div>
    );
}

const NavBarRight = () =>{   
    return (
        <div className='n-right  col-6'>
            <div className="container-btn-1 col-10">
                <Link to="/New_Product" >
                    <button className="btn btn-new-product">
                        Novo Produto
                    </button>
                </Link>
            </div>
            <div className="container-btn-2 col-2">
                <button className="btn-cont">
                    <img src={urlLogOut} alt="Log Out" />
                </button>
                <button className="btn-cont">
                    <span>CAIXA</span>
                    <p style={{
                        fontSize:'2em',
                        color: '#fff'
                    }}>$</p>
                </button>
            </div>
        </div>
    );
}

const NavBar = (props) =>{    
    return (
        <nav className="nav-bar">
            <NavBarLeft frase={props.saudacao}/>
            <NavBarRight />
        </nav>
    );
}

export {NavBar, NavBarLeft};

