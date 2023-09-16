import React from 'react';
import { ListGroup } from 'react-bootstrap';

import './LocationsComp.css'
import 'font-awesome/css/font-awesome.min.css';
function LocationsComp (props){


    return <div className="locations-container">
        <div className="locations-comp-header">
            <h6 className="category-title-text">
                Locations
            </h6>
        </div>
        <div className="locations-comp-body">
            <ListItems/>
        </div>
    </div>
}

export default LocationsComp;

const ListItem = ({  text }) => (
    <div className="d-flex align-items-center location-list-item">
      {text}
    </div>
  );
  
  const ListItems = () => {
    const items = [
      { id: 1, text: 'All of Sri Lanka' },
      { id: 2, text: 'Ampara' },
      { id: 3, text: 'Anuradhapur'},
      { id: 4, text: 'Budulla' },
      { id: 5, text: 'Batticaloa' },
      { id: 6, text: 'Colombo'},
      {id:7, text:'Galle'}
    ];
  
    return (
      <>
        {items.map((item) => (
          <ListItem key={item.id} iconClass={item.iconClass} text={item.text} />
        ))}
      </>
    );
  };
  

  