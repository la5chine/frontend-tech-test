import React, { useState } from 'react';
import Header from '../Header';
import Results from '../Results';


const MainPage = () => {
  const [results, setResults] = useState([]);
  return (
    <>
      <Header setResults={setResults}/>
      <Results results={results}/>
    </>
  );
};

export default MainPage;
