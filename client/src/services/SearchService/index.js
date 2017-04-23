import axios from 'axios';
import _ from 'lodash';

const url = 'http://localhost:3001/api';

function getSearchTerms(term) {
    return axios.get(`${url}/search?term=${term}`)
        .then((res) => _.map(res.data, ({name}) => name));
}

function getSearchTermResults(term) {
    return axios.get(`${url}/search?term=${term}`)
        .then((res) => res.data);
}

export { 
    getSearchTerms, 
    getSearchTermResults 
};