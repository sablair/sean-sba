import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SearchText from '../components/SearchText';
import SearchResults from '../components/SearchResults';
import { getSearchTermResults } from '../services/SearchService';

class App extends Component {
  constructor() {
    super();
    this.fetchResults = this.fetchResults.bind(this);
    this.state = {
      results: []
    }
  }

  fetchResults(term) {    
    getSearchTermResults(term)
      .then((data) => this.setState({ results: data }));
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
