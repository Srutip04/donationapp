import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import style from './style';
import globalStyle from '../../assets/styles/globalStyles';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      <Button
        title={'Donate'}
        onPress={() => {
          console.log('You just pressed me !!');
        }}
      />
      <Button title={'Donate'} isDisabled={true} />
      <Tab title={'Highlight'} />
      <Tab title={'Highlight'} isInactive={true} />
      <Badge title={'Environment'} />
      <FontAwesomeIcon icon={faSearch} />
    </SafeAreaView>
  );
};

export default Home;
