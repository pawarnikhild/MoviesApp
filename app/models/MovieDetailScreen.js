import React from 'react';

import MovieDetailsScreenView from '../views/MovieDetailsScreenView';

const MovieDetailScreen = ({route}) => {
  const {item} = route.params;

  return <MovieDetailsScreenView item={item} />;
};

export default MovieDetailScreen;