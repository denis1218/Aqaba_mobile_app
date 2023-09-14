import * as React from 'react'
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from './header';
import _Text from '../../../shared/core/ui/_Text';
import _Button from '../../../shared/core/ui/_Button';

const PaymentInfo = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} step={3} />
      <View style={styles.content}>
        <_Text text='Choose payment method' />
        <View style={styles.card}>
          <_Text text='Add a Debit/Credit Card' size={16} lineHeight={16} weight='600' />
        </View>
        <View style={styles.body}>
          <TextInput
            label={'Name on Card'}
            style={{ backgroundColor: '#eee' }}
            mode='outlined'
          />
          <TextInput
            label={'Card Number'}
            style={{ backgroundColor: '#eee' }}
            mode='outlined'
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              label={'MM/YY'}
              style={{ backgroundColor: '#eee', width: '48%' }}
              mode='outlined'
            />
            <TextInput
              label={'CVC'}
              style={{ backgroundColor: '#eee', width: '48%' }}
              mode='outlined'
            />
          </View>
          <View style={styles.address}>
            <_Text text='Billing Address' color='#777' />
            <_Text text='John Doe' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <_Text text='10005 Second Street, Victoria, BC V9A' />
                <_Text text='7A2, +123 456 7890' />
              </View>
              <AntDesign name='down' />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <_Text text='or' />
        </View>
        <View style={styles.card}>
          <_Text text='Pay using Financing' size={16} lineHeight={16} weight='600' />
        </View>
      </View>
      <_Button text='Save and Continue' py={15} filled onPress={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: '5%'
  },
  content: {
    marginTop: 20,
    marginBottom: 30,
    gap: 10
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#1b67ff',
    borderRadius: 5
  },
  body: {
    paddingHorizontal: '2%',
    gap: 10
  },
  footer: {},
  address: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
    gap: 5
  }
})

export default PaymentInfo