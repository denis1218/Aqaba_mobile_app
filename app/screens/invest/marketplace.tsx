import * as React from 'react'
import InvestLayout from '../../components/layout/investLayout'
import { ScrollView, View, StyleSheet, Pressable } from 'react-native'
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FooterLayout from '../../components/layout/footerLayout';
import _Text from '../../shared/core/ui/_Text';
import _Button from '../../shared/core/ui/_Button';
import Buyer from '../../components/marketplace/buyer';
import Seller from '../../components/marketplace/seller';


const Marketplace = ({navigation}: any) => {

  const [curPage, setCurPage] = React.useState('Buyer');

  return (
    <InvestLayout>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.top}>
              <_Text text='MarketPlace' size={20} lineHeight={20} weight='600' />
              <Pressable onPress={() => navigation.navigate('MyCart', {name: 'MarketPlace'})}>
                <Ionicons name='cart' size={24} color={'black'} />
              </Pressable>
            </View>
            <View style={styles.middle}>
              <Pressable style={[styles.middlebutton, {backgroundColor: curPage == 'Buyer' ? 'white': '#f6f6f6'}]} onPress={() => setCurPage('Buyer')}>
                <_Text text='Buyer' />
              </Pressable>
              <Pressable style={[styles.middlebutton, {backgroundColor: curPage == 'Seller' ? 'white': '#f6f6f6'}]} onPress={() => setCurPage('Seller')}>
                <_Text text='Seller' />
              </Pressable>
            </View>
            {curPage == 'Buyer' && <TextInput
              placeholder={'Search for products'}
              style={{ borderWidth: 0, backgroundColor: 'white' }}
              mode='outlined'
              left={<TextInput.Icon icon={() => <EvilIcons name='search' color={'black'} size={24} />} />}
            /> }
          </View>
          { curPage == 'Buyer' && <Buyer navigation={navigation} /> }
          { curPage == 'Seller' && <Seller navigation={navigation} /> }
        </View>
      </ScrollView>
      <FooterLayout navigation={navigation} />
    </InvestLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '5%',
    paddingBottom: 50
  },
  header: {
    paddingHorizontal: '5%',
    gap: 15
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  middle: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#f6f6f6',
    borderRadius: 5
  },
  middlebutton: {
    paddingVertical: 10, width: '50%', alignItems: 'center', borderRadius: 5
  }
})

export default Marketplace