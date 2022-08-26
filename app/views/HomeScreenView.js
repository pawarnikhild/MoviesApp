import React from 'react';
import {View, Text, RefreshControl, FlatList} from 'react-native';

import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import MovieCard from '../components/MovieCard';

import GlobalStyles from '../utils/GlobalStyles';
import {AppColor} from '../utils/StyleConstants';
import HomeScreenStyle from '../styles/HomeScreenStyle';

const HomeScreenView = props => {
  const {
    currentUser,
    searchPhrase,
    moviesData,
    findMovie,
    refreshing,
    onRefresh,
    handleInputTextChange,
    handleMovieCardPress,
  } = props;
  const renderItem = ({item}) => (
    <MovieCard
      image={item.poster_path}
      title={item?.original_title || item?.name || 'Movie name'}
      description={item?.overview || 'Movie description'}
      onPress={() => {
        handleMovieCardPress(item);
      }}
    />
  );

  return (
    <View style={GlobalStyles.appContainer}>
      <FlatList
        ListHeaderComponent={
          <View>
            <Text style={HomeScreenStyle.userName}>
              Hello, {currentUser ? currentUser.username : '@username'}
            </Text>
            <View style={HomeScreenStyle.row}>
              <CustomTextInput
                style={HomeScreenStyle.textInput}
                placeholder="Enter movie"
                onChangeText={handleInputTextChange}
                value={searchPhrase}
              />
              <CustomButton
                style={HomeScreenStyle.button}
                title="Search"
                color={AppColor.primary}
                onPress={findMovie}
              />
            </View>
          </View>
        }
        data={moviesData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={HomeScreenStyle.flatlist}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default HomeScreenView;
