import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import _Text from '../../shared/core/ui/_Text';
import { company_list } from './companies';

const CompanyList = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Fund', { name: 'CompanyList' })} style={{ width: '100%' }}>
          <View style={{ position: 'absolute', left: 0 }}>
            <AntDesign name='left' color={'black'} size={16} />
          </View>
        </TouchableOpacity>
        <_Text text='My Watchlist' size={16} weight='600' lineHeight={16} />
      </View>
      <View style={styles.body}>
        {
          company_list.map((company, index) => (
            <View key={index} style={{ gap: 15}}>
              <_Text text={company.name} weight='600' />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <_Text text='View Details' color='#1b67ff' size={13} weight='600' />
                <_Text text='Remove' color='#777' size={13} weight='600' />
              </View>
            </View>
          ))
        }
      </View>
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
  body: {
    gap: 20,
    marginTop: 30
  }
})

export default CompanyList