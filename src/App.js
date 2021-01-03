import React from 'react';
import './App.scss';

import Footer from "./components/footer/footer.component"
import Content from "./components/content/content.component"

import "bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component{

  constructor(props){
    super(props)
  }


  render(){
    return (
      <div className="app">
        <Content />
        <Footer />
      </div>
      

    )
  }
}

export default App;
