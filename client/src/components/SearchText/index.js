import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class SearchText extends Component {
    constructor () {
        super();
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.onNewRequest = this.onNewRequest.bind(this);
        this.state = {
            dataSource: [],
            input: ''
        };
    }

    onUpdateInput(input) {
        this.setState({ input }, () => console.log('input', input));
    }

    onNewRequest(input) {
        this.props.onSearch(input);
    }

    render() {
        return <AutoComplete 
                id="search"
                hintText="Search"
                dataSource={this.state.dataSource}
                onUpdateInput={this.onUpdateInput}
                onNewRequest={this.onNewRequest}
                />;
    }
}

export default SearchText;