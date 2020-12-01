import React, { Component } from "react";

export default class UpdateOrderButton extends Component {
  constructor(props) {
    super(props);

    this.this.props.handleUpdate = this.props.handleUpdate.bind(this);
    this.props.handleDelete = this.props.handleDelete.bind(this);
  }

  handleUpdate() {
    let order_id = this.props._id;
    console.log(order_id);
    fetch(`http://wellnessapps-api.herokuapp.com/${this.props.order_id}/edit`, {
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
  }

  handleDelete() {
    console.log(this.props);
    let order_id = this.props._id;
    console.log(this.props.order_id);
    fetch(`http://wellnessapps-api.herokuapp.com/${this.props.order_id}/delete`, {
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
      <button id="update-button" onClick={this.props.handleUpdate}>
          Edit Order
        </button>
        {/* <div className="order-button-container">
     <a href={"./menuitems"}><button id="update-button" >
          Edit Order
        </button></a>  */}
        <button id="delete-button" onClick={this.props.handleDelete}>
          CANCEL
        </button>
      </div>
    );
  }
}