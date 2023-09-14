import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import _Text from '../../shared/core/ui/_Text';

const Investors = ({ navigation }: any) => {

  const orgList = [
    'Y Combinator', 'Techstars', '500 Startups', 'EASME', 'Y Combinator', 'Techstars', '500 Startups', 'EASME', 'Y Combinator', 'Techstars', '500 Startups', 'EASME'
  ]

  return (
    <ScrollView style={{ maxHeight: '90%' }}>
    <View style={styles.container}>
      <View style={{ gap: 20, width: '60%' }}>
        <_Text text='Organization/Person Name' color='#777' />
        {
          orgList.map((org, index) => (
            <View key={index} style={{ flexDirection: 'row', gap: 15}}>
              <_Text text={`${index}.`} />
              <_Text text={org} color='#1b67ff' />
            </View>
          ))
        }
      </View>
      <View style={{ gap: 20, width: '30%' }}>
        <_Text text='Investments' color='#777' />
        {
          orgList.map((_, index) => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <_Text text='4222' />
              <AntDesign name='right' color={'black'} size={14} />
            </View>
          ))
        }
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Investors;