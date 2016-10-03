import React, {Component} from 'react'
import Navbar from './navbar'

export default class App extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <Navbar/>
          {this.props.children}
        </div> 
      </div>
    );
  }
}