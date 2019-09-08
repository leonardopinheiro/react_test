import React from 'react';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1000,
      
    };
  }



  IncrementItem = () => {
    this.setState({ number: this.state.number + 1 });
  }
  DecreaseItem = () => {
    this.setState({ number: this.state.number - 1 });
  }


  render() {
    return (
      
      <div className={"container"}>
        <div><button onClick={this.IncrementItem}>Aumentar</button></div><br />
        <span className={"number"}>{this.state.number}<br /></span><br />
        <span><button onClick={this.DecreaseItem}>Diminuir</button></span>
       
   
      </div>
      
    );
  }
}

export default App;




