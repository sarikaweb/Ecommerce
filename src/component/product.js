import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCart } from '../redux/actions/index'
import { NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';




const Product = () => {
 
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const addProduct = () => {
        dispatch(addCart(product));
    }


    useEffect(() => {
const getProductItem =  async () => {
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    console.log(response);
    const prodData = await response.json();
    setProduct(prodData);
    setLoading(false);
}
        getProductItem();
    }, []);

    const Loading = () => {
        return(
            <>
            <div className='container'>
                <div className='row'>
                <div className='col-6'>
                      <Skeleton height={500} />
                  </div>
                  <div className='col-6'>
                      <Skeleton height={75} />
                      <Skeleton height={75} />
                      <Skeleton height={75} />
                  </div>
                </div>
            </div>
            </>
        )
    }

    const ShowProduct = () => {
        return(
            <>
            <div className='col-6 py-5'>
            <img src={product.image} className="card-img-top" alt={product.title} />
            </div>
            <div className='col-6 py-5'>
                <h4 className='text-uppercase text-success'>{product.category}</h4>
                <h2 className='text-uppercase'>{product.title}</h2>
                <h2>Rating {product.rating && product.rating.rate}
                <i className='fa fa-star'></i>
                </h2>

                <h3 className='text-danger fw-bolder'>$ {product.price}</h3>
               <p>{product.description}</p>

               <button className='btn btn-dark mx-2' onClick={addProduct}><i className='fa fa-shopping-cart'> </i> Add to Cart</button>
               <NavLink className='btn btn-dark' to="/Cart"><i className='fa fa-shopping-cart'> </i> Go to Cart</NavLink>
            </div>
            </>
        )
    }

    return (
            <>
            <div className='container'>
                <div className='row'>
                    {loading ? <Loading/> : <ShowProduct />}
                </div>
            </div>
            </>
    )
  
}

export default Product
