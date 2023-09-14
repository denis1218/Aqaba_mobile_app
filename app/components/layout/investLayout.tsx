import * as React from 'react'
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'relative'
  }
})

const InvestLayout = ({ children }: any) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default InvestLayout