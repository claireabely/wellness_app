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
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {this.props.stores.map((store) => (
            <div class="card" style={{ width: 200, }}>
              <div class="card-body">
                <h5 class="card-title">Store ID#: {store.store_id}</h5>
                <h5 className="image"> <img alt="example" src="https://pbs.twimg.com/profile_images/1166429774266454017/YesH37GD_400x400.jpg"/></h5>
                <h6 class="card-subtitle mb-2 text-muted">Store name:  {store.storeName}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Zip code:  {store.zipcode}</h6>
                
                {/* <button onClick={ ()=> { this.props.handleClick(store.store_id); }} >GO</button> */}
            <button>GO</button>
              </div>
            </div>
           
          ))}
        </div>
        </div>
      )
    };
}   
