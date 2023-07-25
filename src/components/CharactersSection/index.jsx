import React from 'react';


const CharactersSection = ({ results }) => {


  return (
    <div>
      {
        results.map((result, index) => (
          <div key={index}>
            <img
              src={result.thumbnail.path + '.' + result.thumbnail.extension}
              alt="Marvel-character"
              className={"item-image"}
            />
            <span>{result.name}</span>
          </div>
        ))
      }
    </div>
  );
};


export default CharactersSection;
