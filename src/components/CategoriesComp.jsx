import React from 'react';
import { ListGroup } from 'react-bootstrap';

import './categoryComp.css'
// import 'font-awesome/css/font-awesome.min.css';

import Icon1 from '../assets/images/category-icons/sri-lanka.png'
import Icon2 from '../assets/images/category-icons/electronics.png'
import Icon3 from '../assets/images/category-icons/furnitures.png'
import Icon4 from '../assets/images/category-icons/personal-care.png'
import Icon5 from '../assets/images/category-icons/planting.png'
import Icon6 from '../assets/images/category-icons/automotive.png'
import Icon7 from '../assets/images/category-icons/burger.png'
import Icon8 from '../assets/images/category-icons/dress.png'
import Icon9 from '../assets/images/category-icons/furnitures.png'
import Icon10 from '../assets/images/category-icons/personal-care.png'


function CategoriesComp (props){


    return <div className="categories-container">
        <div className="categories-comp-header">
            <h6 className="category-title-text">
                Categories
            </h6>
        </div>
        <div className="categories-comp-body">
            <ListItems/>
            
        </div>
    </div>
}

export default CategoriesComp;

const ListItem = ({ iconClass, text }) => (
    <div className="d-flex align-items-center my-4">
      <img src={iconClass} alt='icon' className='category-icon' />
      {text}
    </div>
  );
  
  const ListItems = () => {
    const items = [
      { id: 1, iconClass: Icon1, text: 'Made In Sri Lanka' },
      { id: 2, iconClass: Icon2, text: 'Electronics' }, // Replace 'fa-icon' with the appropriate class
      { id: 3, iconClass: Icon3, text: 'Home & Living' },
      { id: 4, iconClass: Icon4, text: 'Food & Beverage' },
      { id: 5, iconClass: Icon5, text: 'Health & Beauty' },
      { id: 6, iconClass: Icon6, text: 'Agriculture' },
      { id: 7, iconClass: Icon7, text: 'Textiles & Fabrics' },
      { id: 8, iconClass: Icon8, text: 'Fashion & Apparel' },
      { id: 9, iconClass: Icon9, text: 'Jewelry & Gemstones' },
      { id: 10, iconClass: Icon10, text: 'Automotive & Machinery' },
     
    ];
    
  
    return (
      <>
        {items.map((item) => (
          <ListItem key={item.id} iconClass={item.iconClass} text={item.text} />
        ))}
      </>
    );
  };
  

  