import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import _Text from '../../shared/core/ui/_Text';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Splash = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: '20%'
        }}
      >
        <_Text
          text='AQABA INVEST PLATFORM'
          size={24}
          weight='600'
          align='center'
          lineHeight={25}
        />
      </View>
    </View>
  )
}

export default Splash;