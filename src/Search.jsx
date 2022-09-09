import React, { Component } from 'react';
class Search extends Component {
   state={
    city:''
   }
   handleChange=({currentTarget})=>{
    const input = currentTarget.value
    this.setState({city:input})
    

   }

    
    render() { 

        const {handleSearch,handleSubmit}=this.props
        return (
            <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input onChange={this.handleChange} type='text' value={this.state.city} className='form-control' id='search-bar' placeholder='City Name'/>
              <span><button  className = 'btn btn-primary'onClick={()=>handleSearch(this.state.city)}>Search</button></span>
            </div>
    
          </form>
        );
    }
}
 
export default Search;