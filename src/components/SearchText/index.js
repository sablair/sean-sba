import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class SearchText extends Component {
    constructor () {
        super();
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.state = {
            dataSource: ['sean', 'sarah', 'xara', 'edris', 'yaphet'],
            input: ''
        };
    }

    onUpdateInput(input) {
        console.log(input);
    }

    render() {
        return <AutoComplete 
                id="search"
                hintText="Search"
                dataSource={this.state.dataSource}
                onUpdateInput={this.onUpdateInput}
                />;
    }
}

export default SearchText;