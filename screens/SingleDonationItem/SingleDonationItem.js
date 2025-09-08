import React from 'react';
import { useSelector } from 'react-redux';
import { Image, View, Text, SafeAreaView, ScrollView } from 'react-native';

import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Routes } from '../../navigation/Routes';
import globalStyle from '../../assets/styles/globalStyles';
import style from './style';

const SingleDonationItem = ({ navigation, route }) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;

  console.log(donationItemInformation);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{ uri: donationItemInformation.image }}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} onPress={() => navigation.navigate(Routes.Payment)} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
