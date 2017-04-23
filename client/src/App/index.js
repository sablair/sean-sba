import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SearchText from '../components/SearchText';
import SearchResults from '../components/SearchResults';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  fetchResults(term) {
    console.log('execute fetch with', term);
  }

  render() {
    return (
      <div>
        <AppBar 
          title="Shopback Test"
          iconElementRight={<SearchText onSearch={ this.fetchResults } />}
        />
        <SearchResults results={ this.state.results } />    
      </div>
    );
  }
}

export default App;
