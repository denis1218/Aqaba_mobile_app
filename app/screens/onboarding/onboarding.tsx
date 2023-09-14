import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Splash from '../../components/onboarding/splash';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  }
})

const OnBoarding = ({navigation}: any) => {
  return (
    <View style={styles.container} onTouchStart={() => { navigation.navigate('Welcome', {name: 'OnBoarding'}) }}>
      <Splash />
    </View>
  )
}

export default OnBoarding;