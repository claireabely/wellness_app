import React, { Component } from 'react';
class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order_id: '',
      itemName: '',
      description: true,
      price: '',
      order: this.props.foods
         
    }
    this.handleOrderChange = this.handleOrderChange.bind(this)
    this.handleOrderSubmit = this.handleOrderSubmit.bind(this)
  }
  handleOrderChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleOrderSubmit(event) {
    event.preventDefault()
    console.log( 'ORDER SUBMITTED',this.state)
    fetch(`http://wellnessapps-api.herokuapp.com/${this.state.user_id}/new`, {
      method:'POST',
      body: JSON.stringify({
         user_id: this.state.user_id,
         email: this.state.email,
        delivery: this.state.delivery,
        order: JSON.stringify(this.state.order)
      }),
      headers: {'Content-Type': 'application/json'}
      
    })
    .then((data) => {
      return data.json();
    })
    .then((parsedData) => {
      console.log(parsedData)
      this.setState({
        hasOrdered: true
      });
    });
  }

  render() {
    return (
      <div className="Edit">
          <form onSubmit={event=>this.handleOrderSubmit(event)}>
        <h3>Your Order</h3>
<table class="my_table">
  <tr>
    <th>Item</th>
    <th>Description</th>
    <th>Price</th>
    <th></th>

  </tr>
  <tr>
   
    <td>Low Sugar Cleanse</td>
    <td>Best for those trying to lower their sugar intake</td>
    <td>4.75 </td>
    <td><p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span></span>
      </label>
    </p></td>
  </tr>
    <tr>
    
    <td>Signature Cleanse</td>
    <td>A combination of our fan-favorite cleansing greens & immune-boosting citrus.</td>
    <td>20</td>
    <td><p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span></span>
      </label>
    </p></td>
  </tr>
    <tr>
 
    <td>Green Cleanse</td>
    <td>Best for amping up your greens intake to alkalize and refresh the body.</td>
    <td>7.5</td>
    <td><p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span></span>
      </label>
    </p></td>
  </tr>
    <tr>
   
    <td>Blue Magic Smoothie</td>
    <td>Vanilla</td>
    <td>2.7</td>
    <td><p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span></span>
      </label>
    </p></td>
  </tr>
    <tr>
   
    <td>Beet Juice</td>
    <td>Cleanse</td>
    <td>8</td>
    <td><p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span></span>
      </label>
    </p></td>
  </tr>
    <tr>
   
    <td>Charcoal Lemon Cayenne</td>
    <td>Cleanse</td>
    <td>6.25</td>
    <td><p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span></span>
      </label>
    </p></td>
  </tr>
    <tr>
  
    <td>Imperfect Produce</td>
    <td>Produce Bundle</td>
    <td>6.25</td>
    <td><p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span></span>
      </label>
    </p></td>
  </tr>
    <tr>
 
    <td>Smoothie Kit</td>
    <td>Cacao</td>
    <td>6.25</td>
    <td><p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span></span>
      </label>
    </p></td>
  </tr>
    <tr>
   
    <td>Celery Juice</td>
    <td>fresh and delicous</td>
    <td>9</td>
    <td><p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span></span>
      </label>
    </p></td>
  </tr>
    <tr>
 
    <td>Ginger Fireball</td>
    <td>cleanse</td>
    <td>10</td>
    <td><p>
      <label>
        <input type="checkbox" class="filled-in" />
        <span></span>
      </label>
    </p></td>
  </tr>
  <tr>
 
 <td></td>
 <td><button>UPDATE ORDER</button></td>
 <td></td>
 <td></td>
</tr>
   
</table>
</form>

      </div>
    )
  }
}
export default Edit;