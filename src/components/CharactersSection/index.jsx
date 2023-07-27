import React from 'react';
import { Chip } from '@lumx/react';


const CharactersSection = ({ results }) => {


  return (
    <div className="result-container">
      {
        results.map((result, index) => (
          <div key={index} className="result-card">
            <img
              src={result.thumbnail.path + '.' + result.thumbnail.extension}
              alt="Marvel-character"
              className={"item-image"}
              loading="lazy"
            />
            <div className="result-card-info">
              <h1>{result.name}</h1>
              <span>{result.description}</span>
              <div className="chips-container">
                <Chip>#comics: {result.comics.available}</Chip>
                <Chip>#series: {result.series.available}</Chip>
                <Chip>#stories: {result.stories.available}</Chip>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};


export default CharactersSection;
