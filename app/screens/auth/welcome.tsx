import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import _Button from '../../shared/core/ui/_Button';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  btngroup: {
    position: 'absolute',
    width: '90%',
    bottom: '5%',
    marginHorizontal: '5%',
    gap: 8
  }
})

const Welcome = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.btngroup}>
        <_Button
          text='Log in'
          color='blue'
          py={15}
          filled={false}
          onPress={() => navigation.navigate('LogIn', { name: 'Welcome' })}
        />
        <_Button
          text='Sign Up'
          py={15}
          filled={true}
          onPress={() => navigation.navigate('SignUp', { name: 'Welcome' })}
        />
      </View>
    </View>
  )
}

export default Welcome;