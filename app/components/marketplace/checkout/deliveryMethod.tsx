import * as React from 'react'
import { View, StyleSheet, Pressable } from 'react-native';
import Header from './header';
import _Text from '../../../shared/core/ui/_Text';
import { size } from 'lodash';
import _Button from '../../../shared/core/ui/_Button';

const DeliveryMethod = ({navigation}: any) => {

  const deliveryList = [
    {
      label: 'Single Day Delivery',
      date: 'March 31',
      price: 15
    },
    {
      label: 'Free Delivery',
      date: 'April 5',
      price: 0
    }
  ]

  const [curIndex, setCurIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} step={2} />
      <View style={styles.content}>
        {
          deliveryList.map((delivery, index) => (
            <Pressable key={index} style={[styles.item, {borderWidth: curIndex == index ? 2 : 0, borderColor: '#1b67ff'}]} onPress={() => setCurIndex(index)}>
              <View style={{gap: 10}}>
                <_Text text={delivery.label} size={16} lineHeight={16} weight='600' />
                <_Text text={"Get it by " + delivery.date} color='#555' />
              </View>
              <_Text text={`${delivery.price > 0 ? '+' : ''}$${delivery.price}`} size={18} lineHeight={18} weight='600' />
            </Pressable>
          ))
        }
      </View>
      <View style={{ position: 'absolute', left: '5%', bottom: '5%', width: '100%' }}>
        <_Button text='Save and Continue' py={15} filled onPress={() => {navigation.navigate('PaymentInfo', {name: 'DeliveryMethod'})}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: '5%',
    position: 'relative'
  },
  content: {
    marginTop: 30,
    gap: 20
  },
  item: {
    padding: '5%',
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10
  }
})

export default DeliveryMethod