import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SearchResultItem from '../SearchResultItem';
import _ from "lodash";

const paperStyle = {
    margin: 30,
    padding: 10
}

class SearchResults extends Component {
    render() {
        const { results } = this.props;
        
        let renderedResult = <p>No result(s)</p>;
        if (results.length > 0) {
            renderedResult = (
                <div>
                    { _.map(results, ({id, name, details}) => <SearchResultItem key={id} name={name} details={details}/>)}
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