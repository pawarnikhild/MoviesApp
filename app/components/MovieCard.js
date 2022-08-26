import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {AppColor, FontSize} from '../utils/StyleConstants';

const MovieCard = props => {
  return (
    <TouchableOpacity style={styles.Container} onPress={props.onPress}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w342${props.image}`}}
        //   source={{uri: `https://occ-0-395-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRb8Mh8BrnV73yrOsEKEgT6nYn8wk-noYB5ClJ0eLgh2BtoZNAlgWkuxqu6KV7vSrtweSkvhG-UZ0HGmORYweMKuIqJXPwcmZ9WJ.jpg?r=a06`}}
        style={styles.posterImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.movieTitle}>{props.title} </Text>
        <Text style={styles.movieDescription} numberOfLines={5}>
          {props.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 4,
    borderColor: AppColor.gray,
    marginBottom: 4,
    padding: 5,
  },
  posterImage: {
    width: 150,
    resizeMode: 'contain',
    height: 150,
    alignSelf: 'center',
  },
  textContainer: {
    width: '70%',
  },
  movieTitle: {
    fontSize: FontSize.Large,
    fontWeight: 'bold',
    color: AppColor.black,
    marginBottom: 5,
  },
  movieDescription: {
    fontSize: FontSize.Small,
    color: AppColor.black,
  },
});