import React, { Component } from 'react';
import Food from './Food'
import StoresRender from './StoresRender'

export default class Stores extends Component {
    constructor(props) {
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {

        const sImg = this.props.item.imgUrl;
      
        this.props.updateStateRI(sImg);
      }
    
  
  render() {
    //const stores = this.state.stores;
    return (
      <div>
          <center><h1>Our Stores</h1></center>
          {this.props.stores.map((store) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Store ID#: {store.store_id}</h5>
                <h5 className="image"> <img alt="example" src="https://images.squarespace-cdn.com/content/v1/5d37375de47a2a0001071628/1602372631568-6BJP0D7BO2CZV8CX5PID/ke17ZwdGBToddI8pDm48kLrQnd3tdlQHoi35tdatgzRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz8CxRD_lte4BsPmEGGAS09NTjnJO9fCHIuJZFekHsS8VbwhKRHeD_fsBnlJq72u68/WebHomeTiles_Market.png?format=500w"/></h5>
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
