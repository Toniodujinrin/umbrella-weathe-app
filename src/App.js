import React, { Component, useEffect } from 'react';
import Content from './content';
import Search from './Search';
import axios from 'axios'

class App extends Component {
  state = {  
   data:'',
  
  }

handleSearch = (city)=>{
  this.setState({data:city})

  
}

  handleSubmit = e=>{
    e.preventDefault()
    


  }
    // handleSearch=(city)=>{

    //  this.setState({data:city})
       
    // }
    

    
     
      
    
 
  render() { 
    return (
      <React.Fragment>
     
      <Search handleSubmit={this.handleSubmit} handleSearch= {this.handleSearch}/>
      <Content data={this.state.data}/>
      </React.Fragment>
    );
  }
}
 
export default App;
