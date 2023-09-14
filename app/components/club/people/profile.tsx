import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import _Text from '../../../shared/core/ui/_Text';

const Profile = ({ person }: { person: IPerson }) => {

  return (
    <View style={styles.container}>
      <View style={styles.personinfo}>
        <View style={{ flexDirection: 'row', gap: 3 }}>
          {/* <Image source={person.avatar} /> */}
          <View style={{ justifyContent: 'space-between' }}>
            <_Text text={person.name} size={12} />
            <_Text text={person.username} size={11} color='#777' />
          </View>
        </View>
        <Ionicons name='ellipsis-vertical' size={20} color='black' />
      </View>
      <View style={styles.body}>
        <_Text text={person.question} weight='600' />
        {/* <Image source={person.src} /> */}
        <View style={styles.bottom}>
          <_Text text={`${person.like}K Likes`} size={12} color='#777' />
          <_Text text={`${person.comment}K Comments`} size={12} color='#777' />
          <_Text text={`${person.share}K Shares`} size={12} color='#777' />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerback}>
          <AntDesign name='hearto' size={16} color={'#777'} />
        </View>
        <View style={styles.footerback}>
          <Fontisto name='commenting' size={16} color={'#777'} />
        </View>
        <View style={styles.footerback}>
          <Feather name='refresh-ccw' size={16} color={'#777'} />
        </View>
        <View style={styles.footerback}>
          <Entypo name='share-alternative' size={16} color={'#777'} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  personinfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  body: {
    marginTop: 10,
    gap: 10
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerback: {
    borderRadius: 5,
    backgroundColor: '#f6f6f6',
    paddingVertical: 10,
    paddingHorizontal: 25
  }
})

export default Profile;