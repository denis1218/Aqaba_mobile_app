import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import _Text from '../../../shared/core/ui/_Text';
import { size } from 'lodash';

const Home = () => {

  const topList = [
    {
      color: '#979797',
      label: 'Pending',
      number: 21
    },
    {
      color: '#1cc0a0',
      label: 'Shipped',
      number: 45
    },
    {
      color: '#006b8a',
      label: 'Dispatched',
      number: 23
    },
    {
      color: '#f56e6e',
      label: 'Return Request',
      number: 32
    }
  ]

  const recentOrderList = [
    {
      customer: 'Mike Murphy',
      orderId: 45612,
      products: [
        {
          vision: 'Ademoe Linen 71.65" Wide',
          name: 'Recessed Arm Convertible Sofa'
        },
        {
          vision: 'Maryjanet 70" Wide Square Arm',
          name: 'Sofa'
        }
      ]
    },
    {
      customer: 'Mike Murphy',
      orderId: 45612,
      products: [
        {
          vision: 'Ademoe Linen 71.65" Wide',
          name: 'Recessed Arm Convertible Sofa'
        },
        {
          vision: 'Maryjanet 70" Wide Square Arm',
          name: 'Sofa'
        }
      ]
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {
          topList.map((item, index) => (
            <View key={index} style={[styles.topItem, {backgroundColor: item.color}]}>
              <_Text text={item.label} color='white' />
              <_Text text={`${item.number}`} size={16} lineHeight={16} color='white' />
            </View>
          ))
        }
      </View>
      <View style={{ gap: 15, marginTop: 15 }}>
        <_Text text='Recent Orders' size={16} lineHeight={16} weight='600' />
        <View style={styles.order}>
          {
            recentOrderList.map((item, index) => (
              <View key={index} style={styles.orderItem}>
                <View style={styles.header}>
                  <View style={{ gap: 5 }}>
                    <_Text text='Customer' size={12} />
                    <_Text text={item.customer} size={16} lineHeight={16} weight='600' />
                  </View>
                  <View style={{ gap: 5 }}>
                    <_Text text='Order ID' size={12} />
                    <_Text text={`${item.orderId}`} size={16} lineHeight={16} weight='600' />
                  </View>
                </View>
                <View style={styles.body}>
                  {
                    item.products.map((each, index) => (
                      <View key={index} style={{ gap: 5 }}>
                        <_Text text={each.vision} weight='600' />
                        <_Text text={each.name} weight='600' />
                      </View>
                    ))
                  }
                </View>
                <View style={styles.footer}>
                  <_Text text='Scan Barcode' color='#107491' size={12} />
                  <_Text text='View Details' color='#107491' size={12} />
                </View>
              </View>
            ))
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '5%'
  },
  top: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10
  },
  topItem: {
    width: '48%',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  order: {
    gap: 10
  },
  orderItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius:3,
    backgroundColor: '#f6f6f6',
    gap: 25
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    gap: 15
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Home