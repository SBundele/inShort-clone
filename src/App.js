import React from 'react';
import {useState, createContext, useEffect} from 'react';

import NavInshort from './components/NavInshort';
import NewsContent from './components/newsContent/NewsContent';
import Footer from './components/footer/Footer';
import './App.css';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState(0);

  const apiKey = process.env.REACT_APP_API_KEY;

  const newsApi = async () => {
    try {
      const news = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`
      );
      const actualData = await news.json();
      console.log(actualData);
      setNewsArray(actualData.articles);
      setNewsResults(actualData.totalResults);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    newsApi();
  }, [category, newsResults]);

  return (
    <div className="App">
      <CategoryContext.Provider value={{ category, setCategory, newsArray, newsResults }}>
        <NavInshort />
        <NewsContent />
        <Footer />
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
