import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: "",
      status2: {},
    }
  }

  componentDidMount() {
    axios.get('http://192.168.4.153:8000/api/products')
      .then((res) => {
        console.log(res);
       
        this.setState({ products: res.data, status2: res.headers })
        console.log(this.state.status2)
      })
  }
  render() {
    return (
      <div>
        {this.state.products && this.state.products.map(element => {
          return (<div key={element.id}>
            <h2>{element.productName}</h2>
            <p>{element.unitPrice}</p>
          </div>)
        })}
      </div>
    );
  }
}

export default App;
