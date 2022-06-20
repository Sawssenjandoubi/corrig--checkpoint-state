import React, { Component } from 'react'
import './App.css';

export default class Content extends Component {
  constructor(props){
   
    super(props)
    this.state={
     
        fullName: "Jandoubi Sawssen",
        profession: "Web Developper",
        bio: "Full Stack JS",
        image: "https://tse1.mm.bing.net/th?id=OIP.tpmHsWmyMA-YO3NE6T3aKAAAAA&pid=Api&P=0&w=173&h=173",
        cnt: 0,
      
    };
   
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        cnt:this.state.cnt+1,
      });
    },1000);
  } 
 
  render() {
  
    return (
      <div >
                <img src={this.state.image} alt="" />
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.profession}</h3>
                <p >{this.state.bio}</p>
               
                <p className='count'>  Count: {this.state.cnt}{" "}
                  sec </p>
                 
            </div>
    
  
  
    );
   
}
}
