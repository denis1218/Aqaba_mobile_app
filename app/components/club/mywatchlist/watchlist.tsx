import * as React from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import _Text from '../../../shared/core/ui/_Text';
import { indices } from '../../platform/bottom/indices';

const WatchList = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Search and add' placeholderTextColor={'#999'} />
      <ScrollView style={{ width: '100%', maxHeight: '70%' }}>
        {
          indices.map((indice, index) => (
            <TouchableOpacity key={index} style={{ width: '100%' }} onPress={() => navigation.navigate('IndiceGraph', {info: indice, name: 'MyWatchList'})}>
              <View style={styles.header}>
                <View style={{ gap: 5, justifyContent: 'center' }}>
                  <_Text
                    text={indice.title}
                    size={13}
                    textTransform='uppercase'
                  />
                  <View style={{ flexDirection: 'row', gap: 20 }}>
                    <_Text
                      text={indice.subtitle}
                      size={10}
                      color='gray'
                      textTransform='uppercase'
                    />
                  </View>
                </View>
                <View style={{ gap: 5, alignItems: 'flex-end' }}>
                  <_Text
                    text={`${indice.totalAmount}`}
                    color={indice.plusPercent > 0 ? '#5cc0b0' : '#ed3f4d'}
                    size={12}
                  />
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    {
                      indice.plusPercent < 0 ?
                      <_Text
                        text={`${indice.plusPercent > 0 ? '+' : ''}${indice.plusPercent}${indice.plusPercent > 0 ? '%' : ''}`}
                        color={indice.plusPercent > 0 ? '#5cc0b0' : '#ed3f4d'}
                        size={10}
                      /> :
                      <_Text
                        text={`+${indice.plusAmount}`}
                        color={indice.plusPercent > 0 ? '#5cc0b0' : '#ed3f4d'}
                        size={10}
                      />
                    }
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 12,
    paddingLeft: 20,
    paddingVertical: 3
  }
})

export default WatchList;