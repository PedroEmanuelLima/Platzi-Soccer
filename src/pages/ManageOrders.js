import React from 'react';
import {Link} from 'react-router-dom';

import urlManageOrders from '../image/ManageOrders.svg'

const ManageOrders = () =>{ 
    return (
        <p style={{
            textAlign: 'end',
            background: '#E5E5E5',
            outline: '0px auto -webkit-focus-ring-color',
            marginLeft: '1%',
            paddingRight: '3em',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '24px',
            lineHeight: '28px'
        }}>
            <Link to='/Trasition_New_Request' style={{
                outlineOffset: '0',
                textDecoration: 'none',
                color: 'rgba(0, 0, 0, 0.5)'
            }}>
                Gerenciar pedidos 
                <img src={urlManageOrders} alt="Orders"/>
            </Link>
        </p>
    );
}
export default ManageOrders;