import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SearchResultItem from '../SearchResultItem';

const paperStyle = {
    margin: 30,
    padding: 10
}

class SearchResults extends Component {
    constructor() {
        super();
        this.state = {
            results: ['data']
        }
    }

    render() {
        const { results } = this.state;
        
        let renderedResult = <p>No result(s)</p>;
        if (results.length > 0) {
            renderedResult = (
                <div>
                    <SearchResultItem name="Test 1" description="This is for test 1"/>
                    <SearchResultItem name="Test 2" description="This is for test 2"/>
                    <SearchResultItem name="Test 3" description="This is for test 3"/>
                </div>
            );
        }
        return (
            <Paper zDepth={2} style={paperStyle}>
                {renderedResult}                 
            </Paper>
        );
    }
}

export default SearchResults;