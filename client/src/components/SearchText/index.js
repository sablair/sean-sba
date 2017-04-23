import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { getSearchTerms } from '../../services/SearchService';

class SearchText extends Component {
    constructor () {
        super();
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.onNewRequest = this.onNewRequest.bind(this);
        this.onClose = this.onClose.bind(this);
        this.state = {
            dataSource: [],
            input: ''
        };
    }

    fetchSearchTerms() {        
        const { input } = this.state;
        if (input) {
            getSearchTerms(input)
                .then((data) => this.setState({ dataSource: data }));
        }        
    }

    onUpdateInput(input) {
        this.setState({ input }, () => this.fetchSearchTerms());
    }

    onNewRequest(input) {        
        this.props.onSearch(input);
    }

    onClose() {
        const { input } = this.state;
        if (input === '') {
            this.props.onClear();
        }
    }

    render() {
        return <AutoComplete 
                id="search"
                hintText="Search"
                dataSource={this.state.dataSource}
                onUpdateInput={this.onUpdateInput}
                onNewRequest={this.onNewRequest}
                onClose={this.onClose}
                />;
    }
}

export default SearchText;