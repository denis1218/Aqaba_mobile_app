import * as React from 'react'
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Header from './header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DefaultTheme, Menu, TextInput, Checkbox } from 'react-native-paper';
import { Provider } from 'react-native-paper';
import _Text from '../../../shared/core/ui/_Text';
import _Button from '../../../shared/core/ui/_Button';

const ShippingAddress = ({ navigation }: any) => {

  const countryList = [
    {
      label: 'United States of America',
      value: 'USA'
    },
    {
      label: 'United Kingdom',
      value: 'UK'
    }
  ]
  const provinceList = [
    'California', 'Florida', 'New York'
  ]
  const [country, setCountry] = React.useState<string>("Select Country");
  const [countryVisible, setCountryVisible] = React.useState(false);
  const [province, setProvince] = React.useState<string>("Province");
  const [provinceVisible, setProvinceVisible] = React.useState(false);

  const openCountryMenu = () => setCountryVisible(true);
  const closeCountryMenu = () => setCountryVisible(false);
  const openProvinceMenu = () => setProvinceVisible(true);
  const closeProvinceMenu = () => setProvinceVisible(false);

  return (
    <View style={styles.container}>
      <ScrollView style={{ maxHeight: '100%' }}>

        <Header navigation={navigation} step={1} />
        <Provider theme={DefaultTheme}>

          <View style={{ marginTop: 20, gap: 20 }}>
            <TextInput
              label={'Full Name'}
              style={{ backgroundColor: '#eee' }}
              mode='outlined'
            />
            <Menu
              visible={countryVisible}
              onDismiss={closeCountryMenu}
              anchor={<Pressable onPress={openCountryMenu} style={styles.dropdown}>
                <_Text text={country} size={16} lineHeight={16} color='#555' />
                <AntDesign name='down' />
              </Pressable>}
              style={{ top: 150, left: 0, width: '100%' }}
            >
              {
                countryList.map((country, index) => (
                  <Menu.Item key={index} title={country.label} onPress={() => { setCountry(country.label); setCountryVisible(false); }} />
                ))
              }
            </Menu>
            <TextInput
              label={'Address'}
              style={{ backgroundColor: '#eee' }}
              mode='outlined'
            />
            <TextInput
              label={'Apt, Suite, Etc'}
              style={{ backgroundColor: '#eee' }}
              mode='outlined'
            />
            <TextInput
              label={'Town/City'}
              style={{ backgroundColor: '#eee' }}
              mode='outlined'
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <View style={{ width: '48%' }}>
                <Menu
                  visible={provinceVisible}
                  onDismiss={closeProvinceMenu}
                  anchor={<Pressable onPress={openProvinceMenu} style={[styles.dropdown, { width: '100%' }]}>
                    <_Text text={province} size={16} lineHeight={16} color='#555' />
                    <AntDesign name='down' />
                  </Pressable>}
                  style={{ top: 450, left: 0, width: '50%' }}
                >
                  {
                    provinceList.map((province, index) => (
                      <Menu.Item key={index} title={province} onPress={() => { setProvince(province); setProvinceVisible(false); }} />
                    ))
                  }
                </Menu>
              </View>
              <TextInput
                label={'Postal Code'}
                style={{ backgroundColor: '#eee', width: '48%' }}
                mode='outlined'
              />
            </View>
            <TextInput
              label={'Phone Number'}
              style={{ backgroundColor: '#eee' }}
              mode='outlined'
            />
            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
              <Checkbox
                status='checked'
              />
              <_Text text='Set as default shipping address' />
            </View>
            <View style={{}}>
              <_Button
                text='Save and Continue'
                py={15}
                filled
                onPress={() => {navigation.navigate('DeliveryMethod', {name: 'ShippingAddress'})}}
              />
            </View>
          </View>
        </Provider>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: '5%'
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: '#eee',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default ShippingAddress