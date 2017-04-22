import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import SearchText from '../components/SearchText';
import SearchResults from '../components/SearchResults';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar 
          title="Shopback Test"
          iconElementRight={<SearchText />}
        />
        <SearchResults />    
      </div>
    );
  }
}

export default App;
