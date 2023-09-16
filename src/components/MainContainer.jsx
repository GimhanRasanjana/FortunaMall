import React from 'react';
import CategoriesComp from './CategoriesComp';
import LocationsComp from './LocationsComp';
import SpecialCategories from './SpecialCategory';
import ProductCatelog, { ProductCatelogSecondary,ProductCatelogHorizontal } from './PorductsCatelog';
import BannerComp from './BannerComp';
import bannerImage from '../assets/images/Banner/banner.png'
import MerchantComp from './MerchantComp';
import './MerchantComp.css'
function MainContainer({children}) {
  return (
    <div className="container-fluid pt-2">
      <div className="row">
          <div className="col-lg-3">
            <CategoriesComp/>
            <LocationsComp/>
          </div>
          <div className="col-lg-9 ">
            <div className="container">
                <div className="row">
                    <div className="col-12 p-0">
                        <h5>FOTUNA MALL </h5>
                    </div>
                    <div className="col-12">
                        <SpecialCategories/>
                    </div>
                    <div className="col-12 mt-4 p-0">
                        <ProductCatelog/>
                    </div>
                    <div className='col-12 mt-4 p-0'>
                        <BannerComp/>
                    </div>
                    <div className="col-12 mt-4 p-0">
                        <ProductCatelogSecondary/>
                    </div>
                    <div className="col-12 mt-4 p-0 ">
                      <ProductCatelogHorizontal/>
                    </div>
                    <div className="col-12  mt-4 p-0">
                      <img className='banner-image' src={bannerImage} alt="" />
                    </div>
                    <div className="col-12  mt-4 p-0">
                      <MerchantComp/>
                    </div>

                </div>
                
            </div>
            
          </div>
        </div>
    </div>
  );
}

export default MainContainer;
