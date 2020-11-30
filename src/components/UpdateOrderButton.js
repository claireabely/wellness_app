import React, { Component } from "react";

export default class UpdateOrderButton extends Component {
  constructor(props) {
    super(props);

    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  

  handleClickDelete() {
    let order_id = this.props._id;
    console.log(order_id);
    fetch("https://wellnessapps-api.herokuapp.com/orders/" + order_id, {
      method: "DELETE",
    })
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        console.log(parsedData);
      });
    // this.props.emptyCart();
   
  }

  render() {
    return (
      <div className="order-button-container">
      
        <button id="delete-button" onClick={this.handleClickDelete}>
          Cancel order
        </button>
      </div>
    );
  }
}