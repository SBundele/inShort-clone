import React from 'react'
import NewsCard from '../newsCard/NewsCard';

import Container from '@mui/material/Container';
import appStore from '../../assets/images/appstore.png';
import playStore from '../../assets/images/playstore.png';
import { useContext } from 'react';
import { CategoryContext } from '../../App';
import './newsContent.css';

function NewsContent() {
  const { newsArray, newsResults, loadMore, setLoadMore } = useContext(CategoryContext);
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="download-msg">
          <span>
            For the best experience use inshorts app on your smartphone
          </span>
          <img src={appStore} alt="app-store" height="80%" />
          <img src={playStore} alt="play-store" height="80%" />
        </div>

        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {loadMore <= newsResults && (
          <>
            <hr />
            <div style={{ textAlign: "center" }}>
              <button
                className="loadMore"
                onClick={() => setLoadMore(loadMore + 20)}
              >
                Load More
              </button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}

export default NewsContent
