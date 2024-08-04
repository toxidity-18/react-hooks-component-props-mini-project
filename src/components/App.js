// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';
import articles from './data/articles'; // Assume you have this data file

const App = () => {
  return (
    <div>
      <Header name="My Personal Blog" />
      <About 
        image="https://via.placeholder.com/215" 
        about="Welcome to my personal blog where I share my thoughts and experiences."
      />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
