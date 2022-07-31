import React  from 'react';
import Products from './products';


const Home = () => {
 

    return (
        <>
    
       <div className="product-list">
        <div className=''>
            <div className='hero text-white'>
       
        <img src="./assets/bg.jpg" className="card-img" alt="..." height="350" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className='container'>
  
    <h5 className="card-title display-3 fw-bolder mt-3">New Offer</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>


  </div>
  </div>
</div>
</div>
       </div>

       <Products />
       </>
    )
  
}

export default Home
