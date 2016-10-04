import React, {Component} from 'react'
import Navbar from './partials/navbar'
import FlashMessagesList from './partials/FlashMessagesList'

export default class App extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <Navbar/>
          <FlashMessagesList/>
          {this.props.children}
        </div> 
      </div>
    );
  }
}