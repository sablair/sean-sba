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
                    <div><h3>Result rows returned: {results.length}</h3></div>
                    <div>
                        { _.map(results, ({_id, name, details}) => <SearchResultItem key={_id} name={name} details={details} />)}
                    </div>
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