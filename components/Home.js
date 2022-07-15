import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

const pic = [
  {
    name: 'Pic_1',
    img: require('../image/banhMi.png'),
  },
  {
    name: 'Pic_2',
    img: require('../image/banhMi.png'),
  },
  {
    name: 'Pic_3',
    img: require('../image/banhMi.png'),
  },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ratio = 414 / 407;

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={{}}>
        <View style={{marginHorizontal: '10%'}}>
          <Text>Home</Text>
          <Text>số 1 Trịnh Văn Bô, Nam Từ Liêm...</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput placeholder="Tìm kiếm" style={styles.tipSearch} />
        </View>
      </View>
      {/* <View style={styles.bigView}> */}
      <ScrollView>
        <View
          style={{
            width: windowWidth * 1,
            height: windowHeight * 0.3,
            marginBottom: 25,
          }}>
          <Swiper
            autoplay={true}
            paginationStyle={{
              top: windowWidth / ratio - 160,
            }}
            style={{}}
            dotStyle={styles.dot}
            activeDotStyle={styles.dot}>
            {pic.map((item, index) => (
              <View key={index} style={styles.PicView}>
                <Image
                  style={styles.img}
                  resizeMode={item.name == 'Pic_5' ? 'cover' : 'contain'}
                  source={item.img}
                />

                <View />
              </View>
            ))}
          </Swiper>
        </View>
        {/* </View> */}

        <View
          style={{
            borderTopWidth: 8,
            borderTopColor: '#FBEDBA',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.touchDail}>
            <Image
              source={require('../image/tabler_discount-2.png')}
              style={styles.touchImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchDail}>
            <Image
              source={require('../image/clarity_new-line.png')}
              style={styles.touchImg}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchDail}
            onPress={() => {
              navigation.navigate('Calender');
            }}>
            <Image
              source={require('../image/uit_calender.png')}
              style={styles.touchImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchDail}>
            <Image
              source={require('../image/fluent_scan-thumb-up-16-regular.png')}
              style={styles.touchImg}
            />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#FAE9A9',
              width: '90%',
              height: '100%',
              borderRadius: 33,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{left: '30%', top: '4%'}}>
                <Text style={{fontSize: 28, color: '#000000'}}>
                  Trưa nay ăn gì
                </Text>
                <Text style={{fontSize: 16, color: '#000000'}}>
                  Gợi ý món hôm nay
                </Text>
              </View>
              <Image
                source={require('../image/nunhmm1.png')}
                style={{left: '110%'}}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginHorizontal: '4%',
                  backgroundColor: '#fff',
                  borderRadius: 15,
                }}>
                <Image
                  source={require('../image/Rectangle1859.png')}
                  style={{width: 197, height: 149, borderRadius: 15}}
                />
                <Text style={{fontSize: 18, color: '#000000'}}>
                  Cơm gạo lứt bò xào rau củ
                </Text>
                <Text style={{color: '#000000', fontSize: 14}}>
                  Gói truyền thống
                </Text>
              </View>
              <View>
                <Image
                  source={require('../image/Rectangle1859.png')}
                  style={{width: 197, height: 149, borderRadius: 15}}
                />
                <Text>Cơm gạo lứt bò xào rau củ</Text>
                <Text>Gói truyền thống</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    height: '100%',
    flex: 1,
    // paddingHorizontal:20,
    // marginHorizontal:10
  },
  tipSearch: {
    width: '90%',
    height: 39,
    backgroundColor: '#F3F3F3',
    borderRadius: 25,
    marginVertical: 10,
  },
  img: {
    width: '100%',
    height: 191,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    // top: 60.5,
  },
  PicView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigView: {
    // width: windowWidth * 1,
    aspectRatio: ratio,
    backgroundColor: '#F2EFEF',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#ABA8A8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1,
    elevation: 3,
    top: 23,
  },
  touchDail: {
    backgroundColor: '#D04711',
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginVertical: '3%',
  },
  touchImg: {
    width: '80%',
    height: '80%',
  },
});
