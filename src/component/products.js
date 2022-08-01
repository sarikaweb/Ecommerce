import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';



const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

 

    let componentMounted = true;

    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
              <div className='col-3'>
             <Skeleton height={300}/>
              </div>
              <div className='col-3'>
             <Skeleton height={300}/>
              </div>
              <div className='col-3'>
             <Skeleton height={300}/>
              </div>
              <div className='col-3'>
             <Skeleton height={300}/>
              </div>
              <div className='col-3'>
             <Skeleton height={300}/>
              </div>
              <div className='col-3'>
             <Skeleton height={300}/>
              </div>
            </>
        )
    }

    const filterProduct = (cat) => {

        const updatedList = data.filter((e)=>e.category === cat);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
            <div className='row justify-content-center py-5'>
                <div className='buttons'>
                    <button className='btn btn-outline-dark ms-2' onClick={()=>setFilter(data)}>
                        All
                    </button>
                    <button className='btn btn-outline-dark ms-2' onClick={()=>filterProduct("men's clothing")}>
                        Men's Cloth
                    </button>
                    <button className='btn btn-outline-dark ms-2' onClick={()=>filterProduct("women's clothing")}>
                        Women's Cloth
                    </button>
                    <button className='btn btn-outline-dark ms-2' onClick={()=>filterProduct("jewelery")}>
                        jewelery
                    </button>
                    <button className='btn btn-outline-dark ms-2' onClick={()=>filterProduct("electronics")}>
                        Electronic
                    </button>
                </div>
                </div>
                <div className='row d-flex'>
                {filter.map((product) => {
                    return (
                        <>

                            <div className='col-3 my-2'>
                                <div className='card'>
                                    <div className='card-image'>
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title.substring(0, 12)}</h5>
                                        <p className="card-text fw-bold">${product.price}</p>
                                        <div className='buttons'>
                                            <NavLink to={`/products/${product.id}`} className='btn btn-dark'>Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </>
                    )

                })}
                </div>
            </>
        )
    }
    return (
        <>
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-12'>
                        <h1 className='fw-bolder text-center'>Latest Product</h1>
                        <hr />
                    </div>
                </div>
                
                    {loading ? <Loading /> : <ShowProducts />}
                
            </div>
        </>
    )

}

export default Products
