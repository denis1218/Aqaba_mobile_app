import * as React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import _Text from '../../../shared/core/ui/_Text';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '5%',
    backgroundColor: '#fff'
  },
  item: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  description: {
    gap: 5
  }
})

const TopNews = ({ navigation, type }: any) => {

  const NewsList = [
    {
      title: 'APPLE INSIDER',
      text: 'Apple becomes the first US company to cross the $3 trillion market cap threshold',
      date: 'FEB 01, 2022, 01:30 PM',
      description: 'Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index. Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index.'
    },
    {
      title: 'APPLE INSIDER',
      text: 'Apple becomes the first US company to cross the $3 trillion market cap threshold',
      date: 'FEB 01, 2022, 01:30 PM',
      description: 'Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index. Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index.'
    },
    {
      title: 'APPLE INSIDER',
      text: 'Apple becomes the first US company to cross the $3 trillion market cap threshold',
      date: 'FEB 01, 2022, 01:30 PM',
      description: 'Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index. Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index.'
    },
    {
      title: 'APPLE INSIDER',
      text: 'Apple becomes the first US company to cross the $3 trillion market cap threshold',
      date: 'FEB 01, 2022, 01:30 PM',
      description: 'Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index. Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index.'
    },
    {
      title: 'APPLE INSIDER',
      text: 'Apple becomes the first US company to cross the $3 trillion market cap threshold',
      date: 'FEB 01, 2022, 01:30 PM',
      description: 'Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index. Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index.'
    },
    {
      title: 'APPLE INSIDER',
      text: 'Apple becomes the first US company to cross the $3 trillion market cap threshold',
      date: 'FEB 01, 2022, 01:30 PM',
      description: 'Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index. Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index.'
    },
    {
      title: 'APPLE INSIDER',
      text: 'Apple becomes the first US company to cross the $3 trillion market cap threshold',
      date: 'FEB 01, 2022, 01:30 PM',
      description: 'Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index. Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index.'
    },
    {
      title: 'APPLE INSIDER',
      text: 'Apple becomes the first US company to cross the $3 trillion market cap threshold',
      date: 'FEB 01, 2022, 01:30 PM',
      description: 'Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index. Apple gained about $90 billion in market capitalization since Friday, making its one-day gain bigger than the bottom 400 stocks in the S&P 500 index.'
    }
  ]

  return (
    <View style={styles.container}>
      <ScrollView style={type == 1 && { height: '85%' }}>
        {
          NewsList.map((item, index) => (
            (type == 0 ? index < 2 : index != -1) &&
            <TouchableOpacity key={index} onPress={() => navigation.navigate('OneTopNews', {name: type == 0 ? 'Platform' : 'AllTop', info: item})}>
              <View style={styles.item}>
                <View style={styles.description}>
                  <_Text
                    text={item.title}
                    size={11}
                    weight='800'
                    color='#01aded'
                  />
                  <_Text
                    text={item.text}
                    size={12}
                    weight='600'
                  />
                  <_Text
                    text={item.date}
                    size={10}
                  />
                </View>
                {/* <Image source={item.src} /> */}
              </View>
            </TouchableOpacity>
          ))
        }
        {type == 0 && <TouchableOpacity onPress={() => navigation.navigate('AllTop', { name: 'Platform' })}>
          <View style={{ marginTop: 20, marginBottom: 10, flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <_Text
              text='View All'
              weight='600'
            />
            <AntDesign name='right' color='black' size={16} />
          </View>
        </TouchableOpacity>}
      </ScrollView>
    </View>
  )
}

export default TopNews;