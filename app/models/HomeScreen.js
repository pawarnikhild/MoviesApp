import React, {useContext, useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';

import AppContext from '../context/AppContext';

import HomeScreenView from '../views/HomeScreenView';

const HomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const appGlobals = useContext(AppContext);

  const [currentUser, setCurrentUser] = useState(null);
  const [moviesData, setMoviesData] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchMoviesData();
    setCurrentUser(appGlobals.user);
  }, [isFocused]);

  const fetchMoviesData = () => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/trending/all/day?api_key=de83de60f38262247d3e6adc52c85119',
    })
      .then(res => {
        setMoviesData(res.data.results);
      })
      .catch(err => {
        ToastAndroid.show('Failed to Fetch movie', ToastAndroid.SHORT);
      });
  };

  const findMovie = () => {
    if (moviesData.length > 0) {
      let movies = moviesData;
      let filteredMovies = movies.filter(movie => {
        if (movie.original_title) {
          return movie.original_title
            .toLowerCase()
            .includes(searchPhrase.toLowerCase());
        } else if (movie.title) {
          return movie.title.toLowerCase().includes(searchPhrase.toLowerCase());
        } else if (movie.name) {
          return movie.name.toLowerCase().includes(searchPhrase.toLowerCase());
        }
      });
      setMoviesData(filteredMovies);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchMoviesData();
    setRefreshing(false);
  };

  const handleInputTextChange = param => {
    setSearchPhrase(param);
    console.log(param);
  };

  const handleMovieCardPress = item => {
    navigation.navigate('MovieDetailScreen', {item: item});
  };

  // console.log('moviesData', moviesData);
  // console.log('currentUser', currentUser);

  return (
    <HomeScreenView
      currentUser={currentUser}
      searchPhrase={searchPhrase}
      handleInputTextChange={handleInputTextChange}
      findMovie={findMovie}
      refreshing={refreshing}
      onRefresh={onRefresh}
      handleMovieCardPress={handleMovieCardPress}
      moviesData={moviesData}
    />
  );
};

export default HomeScreen;