import React, { useState } from 'react';
import Header from '../Header';
import Results from '../Results';


const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  return (
    <>
      <Header setResults={setResults}
              setTotalCount={setTotalCount}
              setSearchTerm={setSearchTerm}
              setIsLoading={setIsLoading}
              setHasError={setHasError}
              hasError={hasError}
      />
      {searchTerm &&
        <Results setResults={setResults}
                 results={results}
                 totalCount={totalCount}
                 searchTerm={searchTerm}
                 isLoading={isLoading}
                 setIsLoading={setIsLoading}
                 hasError={hasError}
        />
      }
    </>
  );
};

export default MainPage;
