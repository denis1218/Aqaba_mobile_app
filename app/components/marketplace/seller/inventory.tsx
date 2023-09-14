import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import _Text from '../../../shared/core/ui/_Text';

const Inventory = () => {

  const inventoryList = [
    {
      src: '',
      label: 'Ademoe Linen 71.65" Wide Recessed Arm Convertible Sofa'
    },
    {
      src: '',
      label: 'Brittanie 16 Piece Dinnerware Set, Service for 4'
    },
    {
      src: '',
      label: 'Elwell 27.5" Brown Table Lamp Set (Set of 2)'
    },
    {
      src: '',
      label: 'Margie 19" Table Lamp'
    }
  ]

  return (
    <View style={styles.container}>
      {
        inventoryList.map((inventory, index) => (
          <View key={index} style={styles.inventory}>
            <_Text text={inventory.label} size={16} lineHeight={16} weight='600' />
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
    padding: '5%'
  },
  inventory: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  }
})

export default Inventory;
