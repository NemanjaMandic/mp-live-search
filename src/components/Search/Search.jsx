// @Flow

import React, {Component, useEffect, useState} from 'react';
import { connect } from "react-redux";
import { getSearchResults} from "../../state/news/actions";
import {Container, Title, Label, Input, SearchIcon} from './style';

type StateT = {
    query?: string,
    results: Array<object>,
    loading: boolean,
    message?: string
}

type PropsT = {
    getSearchResults: Function,
    data: any
}

const Search = (props: PropsT) => {
    
    const { getSearchResults, data } = props;

    const [results, setResults] = useState({
        query: '',
        searchResults: {},
        loading: false,
        message: ''
    })
 
    const { query, searchResults } = results;

  useEffect(() => {

    getSearchResults('');

  }, []);
  
   const handleInputChange = (event) => {
        const searchQuery = event.target.value;
        setResults({
            query: searchQuery,
            searchResults: data
        });

        getSearchResults(query);
        
    }

        

        return(
            <Container>
                <Title>Pixabay Clone</Title>
                <SearchIcon className="fas fa-search" />
                <Input type="text" value={query} placeholder="Search..." onChange={handleInputChange} />
            </Container>
        );
    
  
}

const mapStateToProps = ({news: {images: { data }}}) => ({
    data
})
export default connect(mapStateToProps, {getSearchResults})(Search);