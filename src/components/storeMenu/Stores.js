import React, { Component } from 'react';

export default class Stores extends Component {
  
  
    
  render() {
    return (
    
    
      <div className="Stores">
       {/* <button  onClick={ ()=> { this.props.populateStore(this.state.store_name); }} >hello</button> */}
       {this.props.stores.map((stores, index,) => {
      <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg"/>
   <img alt="example" src={stores.store_img} />
          <span class="card-title" name={stores.store_name}>Card Title</span>
        </div>
         <div class="card-content">
          <p> Free Delivery</p>
         </div>
      <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
       </div> })}
       
      </div>


    )};
       
}   



  