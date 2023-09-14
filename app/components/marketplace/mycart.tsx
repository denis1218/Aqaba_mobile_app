import * as React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import _ from 'lodash';
import _Text from '../../shared/core/ui/_Text';
import { useAppSelector } from '../../store/hooks';
import _Button from '../../shared/core/ui/_Button';

const MyCart = ({navigation}: any) => {

  const { cartList } = useAppSelector(state => state.cart)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Marketplace', {name: 'MyCart'})}>
          <AntDesign name='left' color={'black'} size={16} />
        </Pressable>
        <_Text text='Cart' size={18} lineHeight={18} weight='600' />
        <_Text text={`${cartList.length} Item${cartList.length > 1 ? 's': ''}`} color='#777' />
      </View>
      <ScrollView style={{ maxHeight: '70%' }}>
      <View style={styles.body}>
        {
          cartList.map((cart: ICart, index: number) => (
            <View key={index} style={styles.cartItem}>
              <View style={{ gap: 10 }}>
                <_Text text={cart.name} weight='600' />
                <_Text text={`by ${cart?.designer} Designs`} weight='600' />
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                  <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#f6f6f6', borderRadius: 5 }}>
                    <_Text text='Dark Grey' size={12} />
                  </View>
                  <_Text text='Qty: 2' size={12} color='#777' />
                </View>
              </View>
              <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <_Text text={`$${cart.price}`} />
                <_Text text='Remove item' color='#777' size={12} />
              </View>
            </View>
          ))
        }
      </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={{ backgroundColor: '#f6f6f6', paddingHorizontal: 10, paddingVertical: 10, gap: 15 }}>
          <_Text text='Subtotal' />
          <_Text text={`$${_.sumBy(cartList, (item: ICart) => item.price)}`} size={18} lineHeight={18} weight='600' />
        </View>
        <_Button text='Proceed to checkout' py={15} filled onPress={() => {navigation.navigate('ShippingAddress', {name: 'MyCart'})}} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  body: {
    gap: 20
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 15
  },
  footer: {
    position: 'absolute',
    left: '5%',
    bottom: '5%',
    width: '100%',
    gap: 10
  }
})

export default MyCart;