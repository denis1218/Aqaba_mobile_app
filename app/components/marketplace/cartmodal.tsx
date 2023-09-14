import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import _Text from '../../shared/core/ui/_Text';
import { useAppDispatch } from '../../store/hooks';
import { addCart } from '../../store/slices/cart.slice';

const CartModal = ({ 
  navigation,
  isModalVisible, 
  setIsModalVisible,
  info 
}: {
  navigation: any,
  isModalVisible: boolean, 
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  info: any 
}) => {

  const dispatch = useAppDispatch();

  return (
    <Modal 
      style={{ position: 'relative' }}
      isVisible={isModalVisible} 
      animationIn={"slideInDown"} 
      animationOut={"slideOutUp"} 
      onBackdropPress={() => setIsModalVisible(false)}
    >
      <View style={styles.container}>
        <View style={styles.top}>
          <FontAwesome name='check-circle' size={20} color={'#1b67ff'}  />
          <_Text text='Added to cart' color='#1b67ff' weight='600' />
        </View>
        <View style={styles.middle}>
          <View style={styles.info}>
            <_Text text={info?.name} color='#777' />
            <_Text text={`by ${info?.designer} Designs`} color='#777' />
          </View>
        </View>
        <Pressable style={styles.bottom} onPress={() => {
          dispatch(addCart(info));
          navigation.navigate('MyCart', {name: 'Marketplace'})
        }}>
          <_Text text='Proceed to checkout' size={15} lineHeight={15} weight='600' />
          <AntDesign name='arrowright' size={18} color={'black'} />
        </Pressable>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: '5%',
    gap: 15,
    position: 'absolute',
    top: '5%',
    width: '100%'
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  middle: {},
  info: {
    gap: 5
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

export default CartModal;