// @Flow

import React, {useState} from 'react';

import {Container, ImgWrapper, Link, Content, Tags, Title, Likes, Icons} from './style';


type PropsT = {
   
    user: string,
    previewURL: string,
    tags: string,
    favorites: number,
    likes: number,
    largeImageURL: string,
    userImageURL: string
    
}
const SearchItem = (props: PropsT) => {
    const {user, previewURL, tags, favorites, likes, largeImageURL, userImageURL} = props;

    return ( 
      <Container>
          
          <ImgWrapper>
          <Link href={largeImageURL}>
          <img src={previewURL} />
          </Link>
            <Likes>
            <Icons>{favorites} <i className="fas fa-heart" style={{color: 'red'}} /></Icons>
            <Icons>{likes} <i className="fas fa-thumbs-up"  style={{color: 'blue'}} /></Icons>
            </Likes>
          </ImgWrapper>
         
         <Content>
            <Title>{user}</Title>
            
            <Tags>{tags}</Tags>
            
         </Content>
         
         
      </Container>
     );
}
 

export default SearchItem;