import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import pTabImg from'../assets/images/products/tab.png'

function ProductCatelog() {
    return(
        <>
        <div className='row justify-content-between'>
            <div className='col-12' >
                <div className='sub-category-container'>
                    <span  className='sub-category sub-category-selected'>
                        Electronics
                        <span className='sub-category-selected-bottom'/> 
                    </span>
                    <span className='sub-category'>
                        Cameras & Accessories
                    </span>
                    <span className='sub-category'>
                        Other Electronics
                    </span>
                </div>
                <hr className='sub-category-hr'/>
            </div>
            <div className='col-auto' >
                <ProductCard/>
            </div>
            <div className='col-auto' >
                <ProductCard/>
            </div>
            <div className='col-auto' >
                <ProductCard/>
            </div>

            <div className='col-auto' >
                <ProductCard/>
            </div>
            <div className='col-auto' >
                <ProductCard/>
            </div>
        </div>
    </>
    )
    
    
}


function ProductCard() {
    return<>
        <div className="product-card">
            <div className="topData">
                <p className="prod_ctgry">Laptop, Ultrabooks</p>
                <p className="prod_name">Tablet Red EliteBook Revive 810 G2</p>
            </div>
            <div className="image-container">
                <img src={pTabImg} alt="Image"/>
            </div>
        
            <div className="bottomData">
                <p className="price">17,500.00 LKR</p>
                <div className="icon">
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </div>
        </div>
    </>
}

function ProductCardSecondary() {
    return<>
        <div className="product-card-secondary">
            <div className="topData">
                <p className="prod_ctgry">Laptop, Ultrabooks</p>
                <p className="prod_name">Tablet Red EliteBook Revive 810 G2</p>
            </div>
            <div className="image-container">
                <img src={pTabImg} alt="Image"/>
            </div>
        
            <div className="bottomData">
                <p className="price">17,500.00 LKR</p>
                <div className="icon">
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </div>
        </div>
    </>
}
function ProductCatelogSecondary() {
    return(
        <>
        <div className='row justify-content-between mb-4'>
            <div className='col-12' >
                <div className='sub-category-container'>
                    <span  className='sub-category sub-category-selected'>
                        Made in Sri Lanka
                        <span className='sub-category-selected-bottom'/> 
                    </span>
                    <span className='sub-category'>
                        Home & Living
                    </span>
                    <span className='sub-category'>
                        Agriculture
                    </span>
                    <span className='sub-category'>
                        Books
                    </span>
                    <span className='sub-category'>
                        Services
                    </span>
                    <span className='sub-category'>
                        Other
                    </span>
                </div>
                <hr className='sub-category-hr'/>
            </div>
            <div className="product-grid">
                <div className="product ">
                    <ProductCardSecondary/>
                </div>
                <div className="product">
                    <ProductCardSecondary/>
                </div>
                <div className="product big-product">
                    <ProductCardSecondary/>
                </div>
                <div className="product">
                    <ProductCardSecondary/>
                </div>
                <div className="product">
                    <ProductCardSecondary/>
                </div>
                <div className="product">
                    <ProductCardSecondary/>
                </div>
                <div className="product">
                    <ProductCardSecondary/>
                </div>
                <div className="product">
                    <ProductCardSecondary/>
                </div>
                <div className="product">
                    <ProductCardSecondary/>
                </div>
            </div>
        </div>
    </>
    )
}
function ProductCatelogHorizontal() {
    return(
        <>
        <div className='row justify-content-between mb-4'>
            <div className='col-12' >
                <div className='sub-category-container-horizontal'>
                    <span  className='sub-category-horizontal sub-category-selected-horizontal'>
                        Made in Sri Lanka
                        <span className='sub-category-selected-bottom'/> 
                    </span>
                    <span className='sub-category-horizontal'>
                        Home & Living
                    </span>
                    <span className='sub-category-horizontal'>
                        Agriculture
                    </span>
                    <span className='sub-category'>
                        Books
                    </span>
                    <span className='sub-category'>
                        Services
                    </span>
                    <span className='sub-category'>
                        Other
                    </span>
                </div>
                <hr className='sub-category-hr'/>
            </div>
            <div className="row">
                <div className='col-lg-3'>
                    <ProductCardHorizontal/>
                </div>
                <div className='col-lg-3'>
                    <ProductCardHorizontal/>
                </div>
                <div className='col-lg-3'>
                    <ProductCardHorizontal/>
                </div>
                <div className='col-lg-3'>
                    <ProductCardHorizontal/>
                </div>
                <div className='col-lg-3'>
                    <ProductCardHorizontal/>
                </div>
                <div className='col-lg-3'>
                    <ProductCardHorizontal/>
                </div>
                <div className='col-lg-3'>
                    <ProductCardHorizontal/>
                </div>
                <div className='col-lg-3'>
                    <ProductCardHorizontal/>
                </div>
            </div>
        </div>
    </>
    )
}

function ProductCardHorizontal() {
    return<>
        <div className="product-card-horizontal">
            <div className="row">
                <div className="col-5">
                    <div className="image-container">
                        <img src={pTabImg} alt="Image"/>
                    </div>
                </div>
                <div className="col-7">
                    <div className="topData">
                        <p className="prod-ctgry">Laptop, Ultrabooks</p>
                        <p className="prod-name-horizontal">Tablet Red EliteBook Revive 810 G2</p>
                    </div>
                    <div className="bottomData">
                        <p className="price">17,500.00 LKR</p>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProductCatelog

export {ProductCatelogSecondary,ProductCatelogHorizontal}