import React, { useState, useEffect } from 'react';
import { Pressable, SafeAreaView,View,Text } from 'react-native';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { horizontalScale } from '../../assets/styles/scaling';
import { useSelector,useDispatch } from 'react-redux';
import { updateFirstName } from '../../redux/reducers/User';
import style from './style';
import globalStyle from '../../assets/styles/globalStyles';

const Home = ({ navigation }) => {
  const user = useSelector(state => state.user);
  console.log('user from redux', user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      {/* <Header title={'Azzahri A.'} type={1} />
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
      <Search onSearch={value =>{console.log(value)}}/> */}
      <Header title={`${user.firstName} ${user.lastName}`} type={1} />
      <Pressable onPress={() => dispatch(updateFirstName({ firstName: 'John' }))}>
        <Text>Press me to change first name</Text>
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: horizontalScale(24),
        }}>
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
