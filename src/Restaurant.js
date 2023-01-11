import React, { useState, useEffect } from 'react';
import RestaurantButton from './RestaurantButton';
import Order from './Order';


const Restaurant = (props) => {

  return(
    <div class="container">
        <li>
        
        <button className="btn btn-primary btn-sm" onClick={props.restaurantOrder} >Props-1 Add</button>
        <p>Pizza in Restaurant component {props.updateCount} added</p>

        </li>
           
    </div>
   )

};

export default Restaurant;
