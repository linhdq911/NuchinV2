import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';
import DatePicker from 'react-native-styled-datepicker';

const Calen = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          height: '73%',
          width: '90%',
          backgroundColor: 'red',
          borderRadius: 25,
          top: 20,
        }}>
        <DatePicker weekendDateColor={'#fff'} disabledDateColor={'gray'} />
      </View>
      <View>
        <Text>Món hôm nay</Text>
      </View>
    </View>
  );
};

export default Calen;

const styles = StyleSheet.create({});
