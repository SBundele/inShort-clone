import React from 'react'
import NewsCard from '../newsCard/NewsCard';

import Container from '@mui/material/Container';
import appStore from '../../assets/images/appstore.png';
import playStore from '../../assets/images/playstore.png';
import './newsContent.css';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

function NewsContent() {
  const { newsArray, newsResults } = useContext(CategoryContext);
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className='download-msg' >
          <span>For the best experience use inshorts app on your smartphone</span>
          <img src={appStore} alt="app-store" height="80%" />
          <img src={playStore} alt="play-store" height="80%" />
        </div>
        <div className='news-container'>
          {newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default NewsContent
