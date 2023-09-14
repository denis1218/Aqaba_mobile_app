import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import _Text from '../../../shared/core/ui/_Text';

const Profile = ({ navigation }: any) => {

  const profileList = [
    {
      label: 'Add Product',
      onPress: () => {navigation.navigate('AddProduct', {name: 'Marketplace'})}
    },
    {
      label: 'Manage Locations',
      onPress: () => {}
    },
    {
      label: 'Manage Payment',
      onPress: () => {}
    },
    {
      label: 'Manage Tax Information',
      onPress: () => {}
    },
    {
      label: 'Inventory',
      onPress: () => {}
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ gap: 5 }}>
          <_Text text='24Store' size={18} lineHeight={18} />
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <Entypo name='location-pin' color={'black'} size={16} />
            <_Text text='Chicago, Illinois' size={14} />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={[styles.item, {backgroundColor: '#1b67ff'}]}>
          <_Text text='45' size={20} lineHeight={20} color='white' />
          <_Text text='Orders Completed' size={10} color='white' />
        </View>
        <View style={[styles.item, {backgroundColor: '#1cc0a0'}]}>
          <_Text text='$3345' size={20} lineHeight={20} color='white' />
          <_Text text='Revenue' size={10} color='white' />
        </View>
      </View>
      <View style={styles.footer}>
        {
          profileList.map((item, index) => (
            <Pressable key={index} style={styles.profileItem} onPress={item.onPress}>
              <_Text text={item.label} weight='600' />
            </Pressable>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '5%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  item: {
    paddingVertical: 20,
    alignItems: 'center',
    gap: 10,
    borderRadius: 5,
    width: '48%'
  },
  footer: {
    gap: 15
  },
  profileItem: {
    backgroundColor: '#f6f6f6',
    borderRadius: 5,
    padding: 15
  }
})

export default Profile;