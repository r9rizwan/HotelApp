import React from "react";
import Heading from "./Heading";
import TouristCards from "./TouristInfoCards";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";
import Restaurant from "./Restaurant";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";


import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading/>
      <TouristCards/>
      <Bookings />
      <Order/>
      <Restaurant/>
      <SearchResults results={FakeBookings} />
      <Footer myArray = {["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]} />
      <RestaurantButton />
      
      
    </div>
  );
};

export default App;
