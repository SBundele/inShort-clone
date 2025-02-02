import React from 'react'
import './newsCard.css';

function NewsCard({ newsItem }) {
  return (
    <div className='news-card'>
        <img src={newsItem.urlToImage} alt="news" />
        <div className='news-content'>
            <span className='title'>{newsItem.title}</span>
            <span className='author'>{newsItem.author}</span>
        </div>
    </div>
  )
}

export default NewsCard
