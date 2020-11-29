import React, { Component } from 'react';
import StoresRender from './StoresRender'

export default class Stores extends Component {
  
  render() {
    //const stores = this.state.stores;
    return (
      <div>
          <center><h1>Our Stores</h1></center>
          {this.props.stores.map((store) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Store ID#: {store.store_id}</h5>
                <h5 class="card-image"> <img alt="example" src={store.imgURL}/></h5>
                <h6 class="card-subtitle mb-2 text-muted">Store name:  {store.storeName}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Zip code:  {store.zipcode}</h6>
                
                {/* <button onClick={ ()=> { this.props.handleClick(store.store_id); }} >GO</button> */}
            <button>GO</button>
              </div>
            </div>
          ))}
        </div>
      )
    };
}   
