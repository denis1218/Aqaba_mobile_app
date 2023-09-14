import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AuthLayout from '../../components/layout/authLayout';
import _Text from '../../shared/core/ui/_Text';
import _Button from '../../shared/core/ui/_Button';
import _Input from '../../shared/core/ui/_Input';
import { gotoPreviousScreen } from '../../shared/helper/common';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%'
  },
  main: {
    marginTop: '2%',
    gap: 20
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '5%',
    gap: 5
  }
})

const SignUp = ({navigation}: any) => {

  const handleChange = () => {
  }

  const handleSignUp = () => {
  }

  return (
    <AuthLayout>
      <ScrollView>
        <View style={styles.header}>
          <_Text
            text='Create your account'
            size={22}
            weight='600'
            lineHeight={25}
          />
          <TouchableOpacity onPress={() => gotoPreviousScreen(navigation)}>
            <_Text
              text='X'
              size={20}
              lineHeight={25}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 20 }}>
          <_Text
            text="Let's get started to Aqaba"
            color='gray'
            size={14}
          />
        </View>

        <View style={styles.main}>
          <_Input 
            placeholder='Name'
          />
          <_Input 
            placeholder='Email'
          />
          <_Input 
            placeholder='Phone Number'
          />
          <_Input 
            placeholder='Zip Code'
          />
          <_Input 
            placeholder='Password'
          />
        </View>

        <View style={{
          marginVertical: 15
        }}>
          <_Text
            text='By signing up, you agree to the Terms and Conditions and Privacy Policy'
            size={12}
            color='gray'
          />
        </View>
        <_Button
          text='Sign Up'
          py={15}
          filled={true}
          onPress={() => {}}
        />
        <View style={styles.footer}>
          <_Text
            text='Already have an account?'
            size={14}
          />
          <TouchableOpacity onPress={() => navigation.navigate('LogIn', {name: 'SignUp'})}>
            <_Text
              text='Log in'
              color='#1b67ff'
              weight='600'
              size={14}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AuthLayout>
  )
}

export default SignUp;
