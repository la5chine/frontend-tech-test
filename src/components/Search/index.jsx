import React, { useState } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import { searchCharacters } from '../../api';

const Search = ({ setResults, setTotalCount, setSearchTerm, setIsLoading, setHasError, hasError }) => {
  const [isValid, setIsValid] = useState(true)

  const fetchUserData = (searchTerm) => {
    setIsLoading(true)
    setSearchTerm(searchTerm);
    if (searchTerm === '') {
      setHasError(false)
      setIsValid(true)
      setTotalCount(0)
      setResults([])
      setIsLoading(false)
      return
    }
    searchCharacters(searchTerm)
      .then(({data}) => data)
      .then(({ data }) => {
        setTotalCount(data?.total ? data.total : 0);
        setResults(data?.results ? data.results : []);

        setHasError(data?.total === 0);
        setIsValid(data?.total > 0);

        setIsLoading(false)
      }).catch(() => {
      setHasError(true);
      setIsLoading(false);
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
