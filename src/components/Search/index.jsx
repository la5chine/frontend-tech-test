import React, { useState } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import { searchCharacters } from '../../api';

const Search = ({ setResults, setTotalCount, setSearchTerm }) => {
  const [isValid, setIsValid] = useState(true)
  const [hasError, setHasError] = useState(false)

  const fetchUserData = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm === '') {
      setHasError(false)
      setIsValid(true)
      setTotalCount(0)
      setResults([])
      return
    }
    searchCharacters(searchTerm)
      .then(({ data }) => {
        setTotalCount(data.data?.total ? data.data.total : 0);
        setResults(data.data?.results ? data.data.results : []);

        setHasError(data.data?.total === 0);
        setIsValid(data.data?.total > 0);
      });

  };
  return (
    <TextField theme={Theme.dark} placeholder="Search ..."
               icon={mdiMagnify} onChange={fetchUserData}
               clearButtonProps={{ label: 'Icon'}}
               isValid={isValid}
               hasError={hasError}
    />
  );
};

export default Search;
