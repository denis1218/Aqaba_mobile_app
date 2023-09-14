import * as React from 'react'
import { View, StyleSheet } from 'react-native';
import CartModal from '../../components/marketplace/cartmodal';
import { useAppSelector } from '../../store/hooks';
import AntDesign from 'react-native-vector-icons/AntDesign';
import _Text from '../../shared/core/ui/_Text';
import _Button from '../../shared/core/ui/_Button';

const Buyer = ({ navigation }: any) => {
  const stuffList: Array<ICart> = [
    {
      id: "1",
      src: "",
      name: "Sony Bravia 52in 4K UHD LED TV",
      designer: "Ebern",
      price: 629.99,
      discount: 456.99,
      rating: 4.6,
      reviews: 234
    }
  ]
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalInfo, setModalInfo]: any = React.useState();
  const { cartList } = useAppSelector(state => state.cart);

  const IsContain = (list: ICart[], item: ICart) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == item.id)
        return true;
    }
    return false;
  }
  return (
    <View style={styles.body}>
      {
        stuffList.map((stuff, index) => (
          <View key={index} style={styles.stuff}>
            <View style={{ gap: 5 }}>
              <_Text text={stuff.name} />
              <_Text text={`by ${stuff.designer} Designs`} color='#777' />
            </View>
            <View style={{ gap: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <View style={{ gap: 10 }}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                  <_Text text={`$${stuff.discount}`} size={16} lineHeight={16} weight='600' />
                  <_Text text={`$${stuff.price}`} color='#777' />
                </View>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                  <AntDesign name='star' color={'black'} />
                  <_Text text={` ${stuff.rating} of ${stuff.reviews} reviews`} />
                </View>
              </View>
              {
                !IsContain(cartList, stuff) &&
                <_Button
                  text='Add to Cart'
                  width={100}
                  py={7}
                  filled
                  onPress={() => {
                    setIsModalVisible(true);
                    setModalInfo(stuff);
                  }}
                />
              }
            </View>
          </View>
        ))
      }
      <CartModal navigation={navigation} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} info={modalInfo} />

    </View>
  )
}


const styles = StyleSheet.create({
  body: {
    paddingHorizontal: '5%'
  },
  stuff: {
    borderBottomWidth: 1,
    paddingVertical: '5%',
    gap: 15
  }
})

export default Buyer;