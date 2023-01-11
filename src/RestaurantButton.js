import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";


const RestaurantButton =(props)=>{
   return(
    <div class="container">
        <li>
        
        <button className="btn btn-primary btn-sm" onClick={props.restaurantOrder} >Props-2 Add</button>
        <p>Pizza in RestaurantButton {props.updateCount} added</p>

        </li>
           
    </div>
   )


}
 export default RestaurantButton;
