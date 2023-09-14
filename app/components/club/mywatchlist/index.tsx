import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import WatchList from './watchlist';
import AntDesign from 'react-native-vector-icons/AntDesign';
import _Text from '../../../shared/core/ui/_Text';
import { gotoPreviousScreen } from '../../../shared/helper/common';

const MyWatchList = ({navigation}: any) => {

  const list = [
    {
      label: 'Watchlist',
      onPress: () => setCurIndex(0)
    },
    {
      label: 'My Rooms',
      onPress: () => setCurIndex(1)
    },
    {
      label: 'Today',
      onPress: () => setCurIndex(2)
    }
  ]
  const [curIndex, setCurIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Club', {name: 'MyWatchList'})} style={{ width: '100%' }}>
          <View style={{ position: 'absolute', left: 0 }}>
            <AntDesign name='left' color={'black'} size={16} />
          </View>
        </TouchableOpacity>
        <_Text text='My Watchlist' size={16} weight='600' lineHeight={16} />
      </View>
      <View style={styles.list}>
        {
          list.map((item, index) => (
            <TouchableOpacity key={index} onPress={item.onPress}>
              <_Text text={item.label} color={curIndex == index ? 'black' : '#777'} weight={curIndex == index ? '600' : 'normal'} />
            </TouchableOpacity>
          ))
        }
      </View>
      {curIndex == 0 && <WatchList navigation={navigation} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingTop: '5%'
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 10
  }
})

export default MyWatchList;