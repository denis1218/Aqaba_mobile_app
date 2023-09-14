import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import _Text from '../../../shared/core/ui/_Text';

const Summary = ({ navigation, info }: any) => {
  return (
    <View style={styles.container}>
      <View>
        <_Text text='Highlights' size={16} lineHeight={16} weight='600' />
      </View>
      <View style={styles.body}>
        <View style={styles.item}>
          <_Text text='Stock Symbol' color='#777' />
          <_Text text={info?.highlights?.stockSymbol} size={16} lineHeight={16} weight='600' />
        </View>
        <View style={styles.item}>
          <_Text text='Acquisitions' color='#777' />
          <_Text text={info?.highlights?.acquisitions} size={16} lineHeight={16} weight='600' />
        </View>
        <View style={styles.item}>
          <_Text text='Investments' color='#777' />
          <_Text text={info?.highlights?.investments} size={16} lineHeight={16} weight='600' />
        </View>
        <View style={styles.item}>
          <_Text text='Exits' color='#777' />
          <_Text text={info?.highlights?.exits} size={16} lineHeight={16} weight='600' />
        </View>
        <View style={styles.item}>
          <_Text text='Total Funding Amount' color='#777' />
          <_Text text={`$${info?.highlights?.totalFundingAmount} B`} size={16} lineHeight={16} weight='600' />
        </View>
        <View style={styles.item}>
          <_Text text='Stock Symbol' color='#777' />
          <_Text text={info?.highlights?.stockSymbol} size={16} lineHeight={16} weight='600' />
        </View>
      </View>
      <View style={styles.footer}>
        <_Text text='About' size={16} lineHeight={16} weight='600' />
        <_Text text={info?.highlights?.about} color='#555' size={15} lineHeight={18} />
        <View style={{ flexDirection: 'row', gap: 5}}>
          <Entypo name='location-pin' color={'black'} size={16} />
          <_Text text={info?.location} />
        </View>
        <_Text text={info?.highlights?.website} color='#1b67ff' />
        <View style={{gap: 20}}>
          <_Text text='10,000+ People' size={16} lineHeight={16} color='#777' />
          <_Text text='Public Company' size={16} lineHeight={16} color='#777' />
          <_Text text='Post IPO Debt' size={16} lineHeight={16} color='#777' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    paddingVertical: '5%'
  },
  body: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 10
  },
  item: {
    borderRadius: 10,
    backgroundColor: '#fafafa',
    paddingVertical: 10,
    paddingLeft: 15,
    gap: 10,
    width: '45%'
  },
  footer: {
    gap: 15,
    marginTop: 20
  }
})

export default Summary;