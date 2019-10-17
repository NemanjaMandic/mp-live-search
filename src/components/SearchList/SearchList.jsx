// @flow

import  React from 'react';

import { Container } from './style';
import SearchItem from '../SearchItem/SearchItem';

type PropsT = {
    results: Array<any>
}
const SearchList = ({results}: PropsT) => {

    return ( 
        <Container>
          
           {results && results.map(result => {
                return <SearchItem {...result} key={result.id} />;
      })}
        </Container>
        

   
    );
}


export default SearchList;