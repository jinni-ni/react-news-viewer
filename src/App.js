// import React, { useState, useCallback } from 'react';
// import axios from 'axios';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';

import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <Route path="/:category?" component={NewsPage} />
    // <>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </Route>
  );
};

export default App;
