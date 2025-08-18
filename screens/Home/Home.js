import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import Header from '../../components/Header/Header';
import style from './style';
import globalStyle from '../../assets/styles/globalStyles';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
    </SafeAreaView>
  );
};

export default Home;
