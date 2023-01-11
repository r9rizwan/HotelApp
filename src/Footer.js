import React from "react";

const Footer = (props) => {


    const myArray = props.myArray;
    const listItems = myArray.map((number) =>
      <li>{number}</li>
    );
return (
<div class="d-flex justify-content-center">

<ul>{listItems}</ul>


</div>

);

};

export default Footer;