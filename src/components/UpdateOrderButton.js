import React, { Component } from "react";

export default class UpdateOrderButton extends Component {
  constructor(props) {
    super(props);

    this.handleClickUpdate = this.handleClickUpdate.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickUpdate() {
    let order_id = this.props._id;
    console.log(order_id);
    fetch(`http://wellnessapps-api.herokuapp.com/${this.state.order_id}/edit`, {
      method: "PUT",
      body: JSON.stringify({
        itemsInOrder: this.props.itemsInCart_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        console.log(parsedData);
      });
    // this.props.emptyCart();
    this.props.showModal(1);
  }

  handleClickDelete() {
    let order_id = this.props._id;
    console.log(order_id);
    fetch(`http://wellnessapps-api.herokuapp.com/${this.state.order_id}/delete`, {
      method: "DELETE",
    })
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        console.log(parsedData);
      });
    // this.props.emptyCart();
//     fetch("https://wellnessapps-api.herokuapp.com/orders/" + "delete")
//     .then(response => response.json())
//     .then(result => {
//       console.log("result", result),
//         setStore({
//           contacts: result
//         });
//     })
//     .catch(e => console.error(e));
// });
   
  }

  render() {
    return (
      <div className="order-button-container">
      <button id="update-button" onClick={this.handleClickUpdate}>
          Update order
        </button>
        <button id="delete-button" onClick={this.handleClickDelete}>
          Cancel order
        </button>
      </div>
    );
  }
}