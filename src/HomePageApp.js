

import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MenuItems from './components/Stores'
import AppMenu from './components/AppMenu'



import YourOrder from './components/YourOrder'

import './App.css';








class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: [],
      name: '',
      description: '',
      price: 0,
      imgURL: '',
      updatedFoods: [],
      totalPrice: 0,
   
          collapsed: true
        
    }
    

   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
   this.handleDelete = this.handleDelete.bind(this)
   this.addUpdatedFood = this.addUpdatedFood.bind(this)
   this.toggleCollapsed = this.toggleCollapsed.bind(this)


  }
  componentDidMount(){
    fetch('http://wellnessapps-api.herokuapp.com/menuitems')
    .then((data) => {
      return data.json();
    })
    .then((parsedData) => {
      console.log(parsedData)
      this.setState({
        menuItems: parsedData,
      });
    });

  }


  

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  addUpdatedFood(food) {
   let currentPrice= this.state.totalPrice
   let newPrice= currentPrice+food.price
   let updatedFoods= [...this.state.updatedFoods]
   let newUpdatedFoods= updatedFoods.push(food)
   console.log(newUpdatedFoods)
   console.log(this.state.updatedFoods)
   console.log(food)
    this.setState({updatedFoods: [food,...this.state.updatedFoods], totalPrice:newPrice})
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleDelete(index) {
    const newUpdatedFood = this.state.updatedFoods
    newUpdatedFood.splice(index, 1)
    this.setState({
      updatedFood: newUpdatedFood
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const newFood = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price
    }

    const updatedFoods = [ ...this.state.menuItems, newFood ]

    this.setState({
      menuItems: updatedFoods,
      name: '',
      description: '',
      price: 0
    })
  }


 
  render() {
    console.log(this.state.menuItems)
    return (
      <div>
     
        <Header toggleCollapsed={this.toggleCollapsed} collapsed={this.state.collapsed} />
  
        <main>
        {/* <AppMenu toggleCollapsed={this.toggleCollapsed} collapsed={this.state.collapsed}/> */}
         <MenuItems menuItems={this.state.menuItems} addUpdatedFood={this.addUpdatedFood} handleDelete={this.handleDelete} />
       </main>
        <Footer />
      
      </div>
    )
  }
}

export default App;

