import React, { Component } from "react";

export default class UpdateOrderButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch(
      "https://wellnessapps-api.herokuapp.com/orders/" +
        this.props.user_id +
        "/new",
      {
        method: "POST",
        body: JSON.stringify({
          user_id: this.props.user_id,
          user_name: this.props.user_name,
          itemsInOrder: this.props.itemsInCart_id,
          store_name: this.props.store_name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
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
        <button onClick={this.handleClick}>Place order!</button>
      </div>
    );
  }
}
