import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import _Bar from '../../shared/core/ui/_Bar';
import { marketplace_seller_list } from '../../shared/helper/mockData';

const Seller = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <_Bar list={marketplace_seller_list(navigation)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})

export default Seller