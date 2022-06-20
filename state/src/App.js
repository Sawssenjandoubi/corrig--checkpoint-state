import React from "react";
import "./App.css";
import Content from './content'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     /* fullName: "Jandoubi Sawssen",
      profession: "Web Developper",
      bio: "Full Stack JS",
      image: "https://tse1.mm.bing.net/th?id=OIP.tpmHsWmyMA-YO3NE6T3aKAAAAA&pid=Api&P=0&w=173&h=173",*/
      show: true,
    };
    console.log("state of app",this.state)
    this.handleClick = () => {
      this.setState({ show: !this.state.show });
    };
  }
  render() {
    if(this.state.show){
          return (
        <div className="pos app">
        <div className="box">
      
              <Content/>
              <button type="button" className="btn" onClick={this.handleClick}>
              Show Me
            </button>
              
            
              </div>
              </div>
            );
    }
    else{
      return (
        <div className="pos app"> 
        <div className="box">
        <button type="button" className="btn" onClick={this.handleClick}>
              Show Me
            </button>
          </div>
        </div>
      );
    }
        }   
       
        
    }  
 

export default App;