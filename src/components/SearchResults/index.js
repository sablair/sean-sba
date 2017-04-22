import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const paperStyle = {
    margin: 30,
    padding: 10
}

class SearchResults extends Component {
    constructor() {
        super();
        this.state = {
            results: ['sds']
        }
    }

    render() {
        const { results } = this.state;
        
        let renderedResult = <p>No result(s)</p>;
        if (results.length > 0) {
            renderedResult = (
                <div>
                    <span>This is test number one</span>
                    <Divider />
                    <span>This is test number two</span>
                    <Divider />
                    <span>This is test number three</span>
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