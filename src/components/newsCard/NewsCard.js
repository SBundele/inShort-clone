import React from "react";
import placeholder from "../../assets/images/placeholder-image.jpg";
import "./newsCard.css";

function NewsCard({ newsItem }) {
  return (
    <div className="news-card">
      <img
        src={newsItem.urlToImage ? newsItem.urlToImage : placeholder}
        alt={newsItem.title}
      />

      <div className="news-content">
        <div>
          <span className="title">{newsItem.title}</span>
          <span className="author">
            {/* eslint-disable-next-line */}
            <a href={newsItem.url} target="_blank">
              <strong>short </strong>
            </a>
            <span className="muted">
              by {newsItem.author ? newsItem.author : "unknown"}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{newsItem.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={newsItem.url} target="__blank" className="source">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
