import React from 'react';
import { Text, View, ImageBackground} from 'react-native';

import MovieDetailsScreenStyle from '../styles/MovieDetailsScreenStyle';

const MovieDetailsScreenView = props => {
  const {item} = props;
  return (
    <ImageBackground
      style={MovieDetailsScreenStyle.background}
      source={{uri: `https://image.tmdb.org/t/p/w342${item.poster_path}`}}>
      <View style={MovieDetailsScreenStyle.box}>
        <View style={MovieDetailsScreenStyle.row}>
          <Text style={MovieDetailsScreenStyle.movieTitle}>
            {item?.original_title || item?.name || 'Movie name'}
          </Text>
          <Text style={MovieDetailsScreenStyle.releaseDate}>
            {item.release_date}
          </Text>
        </View>
        <Text style={MovieDetailsScreenStyle.rating}>
          {item.vote_average} %
        </Text>
        <Text style={MovieDetailsScreenStyle.movieDescription}>
          {item?.overview || 'Movie description'}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default MovieDetailsScreenView;