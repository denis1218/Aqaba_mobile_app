import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AuthLayout from '../../components/layout/authLayout';
import _Text from '../../shared/core/ui/_Text';
import _Button from '../../shared/core/ui/_Button';
import _Input from '../../shared/core/ui/_Input';
import { gotoPreviousScreen } from '../../shared/helper/common';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  header: {
    marginTop: '5%',
    marginBottom: '5%'
  },
  comment: {
    width: '50%', gap: 5
  },
  main: {
    marginTop: '2%',
    gap: 20
  },
  body: {
    marginTop: '10%',
    marginBottom: '10%',
    gap: 20
  }
})

const LogIn = ({navigation}: any) => {

  const handleChange = () => {
  }

  const handleLogIn = () => {
    navigation.navigate('Platform', {name: 'LogIn'})
  }

  return (
    <AuthLayout>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Welcome', {name: 'Welcome'})}>
            <AntDesign name='left' color={'black'} size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.comment}>
          <_Text
            text='Log in to your account'
            size={24}
            weight='600'
            lineHeight={25}
          />
          <_Text
            text="Let's get started to Aqaba"
            size={14}
            color='#777'
            weight='600'
            lineHeight={25}
          />
        </View>
        <View style={styles.body}>
          <_Input
            placeholder='Email'
          />
          <_Input
            placeholder='Password'
          />
        </View>
        <_Button
          text='Login'
          py={15}
          onPress={handleLogIn}
          filled={true}
        />
        <View style={{ marginTop: '5%', alignItems: 'center' }}>
          <_Text
            text='Trouble Logging in?'
            color='black'
            size={14}
            weight='600'
            lineHeight={25}
          />
        </View>
      </ScrollView>
    </AuthLayout>
  )
}

export default LogIn;
