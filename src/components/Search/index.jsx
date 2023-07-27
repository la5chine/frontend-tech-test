import React, { useCallback, useMemo, useState } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import { searchCharacters } from '../../api';

const Search = ({ setResults, setTotalCount, setSearchTerm, setIsLoading, setHasError, hasError }) => {
  const [isValid, setIsValid] = useState(true);

  const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  };

  const fetchUserData = useCallback((searchTerm) => {
    setIsLoading(true);
    setSearchTerm(searchTerm);
    if (searchTerm === '') {
      setHasError(false);
      setIsValid(true);
      setTotalCount(0);
      setResults([]);
      setIsLoading(false);
      return;
    }
    searchCharacters(searchTerm)
      .then(({ data }) => data)
      .then(({ data }) => {
        setTotalCount(data?.total ? data.total : 0);
        setResults(data?.results ? data.results : []);

        setHasError(false);
        setIsValid(true);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });

  }, [setHasError, setIsLoading, setIsValid, setResults, setTotalCount, setSearchTerm])

  const handleOnChange = useMemo(
    () => debounce((searchTerm) => {
      fetchUserData(searchTerm);
    }, 250),
    [fetchUserData]
  );
  return (
    <TextField theme={Theme.dark}
               placeholder="Search ..."
               icon={mdiMagnify}
               onChange={handleOnChange}
               clearButtonProps={{ label: 'Icon' }}
               isValid={isValid}
               hasError={hasError}
    />
  );
};

export default Search;
