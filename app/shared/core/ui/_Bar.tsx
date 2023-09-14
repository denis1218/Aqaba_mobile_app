import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import _Text from './_Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 15
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomColor: '#068fc6'
  }
})

interface IBar {
  label: string
  content: any
}

const _Bar = ({ list }: { list: IBar[] }) => {

  const [curIndex, setCurIndex] = React.useState(0);

  return (
    <>
      <View style={{ backgroundColor: 'black', width: '100%' }}>
        <ScrollView horizontal>
          <View style={styles.container}>
            {
              list.map((item, index) => (
                <TouchableOpacity key={index} style={[styles.item, { borderBottomWidth: index === curIndex ? 2 : 0 }]} onPress={() => { setCurIndex(index) }}>
                  <_Text
                    text={item.label}
                    size={12}
                    color={index == curIndex ? 'white' : 'gray'}
                  />
                </TouchableOpacity>
              ))
            }
          </View>
        </ScrollView>
      </View>
      {
        list.map((item, index) => (
          <View key={index}>
            { index == curIndex && item.content }
          </View>
        ))
      }
    </>
  )
}

export default _Bar;
