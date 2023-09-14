import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import _Text from '../../shared/core/ui/_Text';
import _Bar from '../../shared/core/ui/_Bar';
import { club_list } from '../../shared/helper/mockData';
import FooterLayout from '../../components/layout/footerLayout';
import InvestLayout from '../../components/layout/investLayout';

const Club = ({navigation}: any) => {

  return (
    <InvestLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <_Text
            text='Investor Club'
            size={20}
            weight='600'
            lineHeight={20}
          />

          <TouchableOpacity onPress={() => navigation.navigate('MyWatchList', {name: 'Club'})}>
            <View style={styles.watchlist}>
              <_Text
                text='My Watchlist'
              />
              <AntDesign name='right' color='#1b67ff' size={16} />
            </View>
          </TouchableOpacity>
        </View>
        <_Bar list={club_list(navigation, 0)} />
      </View>
      <FooterLayout navigation={navigation} />
    </InvestLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: '5%'
  },
  header: {
    paddingHorizontal: '5%'
  },
  watchlist: {
    paddingHorizontal: '5%',
    paddingVertical: 20,
    backgroundColor: '#f6f6f6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 20
  }
})

export default Club;