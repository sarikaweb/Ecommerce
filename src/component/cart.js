import React from 'react';
import {useSelector} from 'react-redux';


const Cart = () => {

    return(
        <>
       <div className='row'>
        <div className='col-4'>
            <img src={product.image} alt={product.title} />
        </div>
       </div>
       </>
    )
}

export default Cart;