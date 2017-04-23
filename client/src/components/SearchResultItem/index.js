import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

const dividerStyle = {
    marginTop: 20
}

class SearchResultItem extends Component{
    render() {
        return (<div>
            <h3>{this.props.name}</h3>
            <span>{this.props.details}</span>
            <Divider style={dividerStyle} />
        </div>);
    }
}          

export default SearchResultItem;