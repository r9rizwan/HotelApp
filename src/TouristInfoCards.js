import React from "react";

const TouristCards = () => {
  return (

<div className="card-deck">
  <div className="card">
    <img className="card-img-top" height={250} src="https://peoplemakeglasgow.com/imager/general/187999/West-end-Tall-Ship-and-Riverside-Museum-Content-Block_2021-09-26-191053_dorw_8dc3bdbc8660ad389ec95cdf9b15d797.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title"><b>Glasgow</b></h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <button className="card-text">More information</button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" height={250} src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Fcorn-exchange-manchester_6__783279711.jpg&action=ProductDetailFullWidth2" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title"><b>Manchester</b></h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">More information</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" height={250} src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title"><b>London</b></h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small class="text-muted">More information</small></p>
    </div>
  </div>
</div>


    );
};

export default TouristCards;