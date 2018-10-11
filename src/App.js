import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm'
import Rank from './components/Rank';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <Rank />
        {/*<FaceRecoginition />*/}
      </div>
    );
  }
}

export default App;
