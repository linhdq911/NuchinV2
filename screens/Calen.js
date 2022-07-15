import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';
import DatePicker from 'react-native-styled-datepicker';

const Calen = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          height: '55%',
          width: '90%',
          backgroundColor: 'red',
          borderRadius: 25,
          top: 20,
        }}>
        <DatePicker weekendDateColor={'#fff'} disabledDateColor={'gray'} />
      </View>

      <View style={{top: '7%'}}>
        <Text style={{fontSize: 18, color: '#3D2B2B'}}>Món hôm nay</Text>
      </View>

      <View
        style={{
          top: '15%',
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          borderRadius: 25,
        }}>
        <View style={{}}>
          <Image
            source={require('../image/Rectangle1800.png')}
            style={{marginVertical: '10%', marginHorizontal: 10}}
          />
        </View>
        <View>
          <Text>Bánh mì Sài Gòn</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur </Text>
        </View>
      </View>

<View style={{top: '7%'}}>
        <Text style={{fontSize: 18, color: '#3D2B2B'}}>Món hôm nay</Text>
      </View>

      <View
        style={{
          top: '15%',
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          borderRadius: 25,
        }}>
        <View style={{}}>
          <Image
            source={require('../image/Rectangle1800.png')}
            style={{marginVertical: '10%', marginHorizontal: 10}}
          />
        </View>
        <View>
          <Text>Bánh mì Sài Gòn</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur </Text>
        </View>
      </View>
      
    </View>
  );
};

export default Calen;

const styles = StyleSheet.create({});
