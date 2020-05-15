import React from 'react';

import urlList from '../image/list.svg';

import '../styles/Retangle.css';
import '../styles/bootstrap.min.css';

const RetanglePrincipal = props =>{ 

    return (
        <div className="retangle-externo">
            <div className="container-list">
                <img src={urlList} alt="Lista"/>
                <span className="name-list">Lista</span>
            </div>
            <div className="retangle-interno col-11">
                {props.product.map(p => (
                    <div className='products'>
                        {p}
                        {/* <img src={p.urlImage}/>
                        <p>{p.descrição}</p>
                        <p>R$ {p.preço}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

// const Btns = props => {
//     return(
//         <div onClick={setQuantidade(quatidade-1)} style={{ display: 'flex', flexDirection: 'row'}}>
//             <button style={{
//                 width: '20px',
//                 height: '18px', 
//                 background: '#BA2A2A', 
//                 borderRadius: '6px' }}>-</button>
//                 {props.quant}
//             <button onClick={setQuantidade(quatidade+1)} style={{ 
//                 width: '20px', 
//                 height: '18px', 
//                 background: '#BA2A2A', 
//                 borderRadius: '6px' }}>+</button>
//         </div>
        
//     );
// }

const RetangleNewRequest = props => {

    return(
        <div className="retangle-externo">
            <div className="container-list">
                <img src={urlList} alt="Lista"/>
                <span className="name-list">Lista</span>
            </div>
            <div className="retangle-interno col-11">
                {props.product.map(p => (
                    <div className='request-content-products'>
                        {p}
                        {/* <img src={p.urlImage}/>
                        <p>{p.descrição}</p>
                        <p>R$ {p.preço}</p> 
                        <Btns />*/}
                    </div>
                ))}
            </div>
        </div>
    );
}

export {RetanglePrincipal, RetangleNewRequest};
