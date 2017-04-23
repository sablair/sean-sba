import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

class SearchResultItem extends Component{
    render() {
        return (<div>
            <h3>{this.props.name}</h3>
            <span>{this.props.description}</span>
            <Divider />
        </div>);
    }
}          

export default SearchResultItem;