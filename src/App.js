import "./App.css";

import React, { Component } from "react";

// var colors = ['rgb(' + Math.round(Math.random() * 255) + ',' +
// Math.round(Math.random() * 255) + ',' +
// Math.round(Math.random() * 255) + ')'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      count: 0,
    };
    this.changeColor = this.changeColor.bind(this);
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
  }
  changeColor() {
    this.setState({
      display: !this.state.display,
    });
  }
  add() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  minus() {
    if (this.state.count === 0) {
      this.setState((state) => ({
        count: 0,
      }));
    } else {
      this.setState((state) => ({
        count: state.count - 1,
      }));
    }
  }

  render() {
    if (this.state.display) {
      return (
        <div>
          <div
            className="items-div"
            style={{
              backgroundColor:
                "rgb(" +
                Math.round(Math.random() * 255) +
                "," +
                Math.round(Math.random() * 255) +
                "," +
                Math.round(Math.random() * 255) +
                ")",
              height: "100vh",
            }}
          >
            <div className="countdiv">
              <h1>Count {this.state.count}</h1>
            </div>
            <button onClick={this.minus}>-</button>
            <button onClick={this.changeColor}>Change Color</button>
            <button onClick={this.add}>+</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div
            className="items-div"
            style={{
              backgroundColor:
                "rgb(" +
                Math.round(Math.random() * 255) +
                "," +
                Math.round(Math.random() * 255) +
                "," +
                Math.round(Math.random() * 255) +
                ")",
              height: "100vh",
            }}
          >
            <div className="countdiv">
              <h1>Count: {this.state.count}</h1>
            </div>
            <button onClick={this.minus}>-</button>
            <button onClick={this.changeColor}>Change Color</button>
            <button onClick={this.add}>+</button>
          </div>
        </div>
      );
    }
  }
}

// export default App;
// function App() {
//   const [changeColor, setChangeColor] = useState(false)

//   const handleChangeColor = () => {
//     setChangeColor(true)
//     // console.log('color is changed')
// }

//   render (){
//     <div className="App">
// {()=> {
//   if("fgdfgdf"){
// return "dfgdfg"
//   }else if("ghjgh"){
//     return "dfgdfg"
//   }else if("ghfgh"){
//     return "dfgdfg"
//   }else{
//     return "dfgdfg"
//   }
// }}
//       <button onClick={handleChangeColor} >Change color</button>
//     </div>
//     }
// }
