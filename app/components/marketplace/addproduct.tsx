import * as React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, StyleSheet, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import _Text from '../../shared/core/ui/_Text';
import { gotoPreviousScreen } from '../../shared/helper/common';
import { DefaultTheme, Menu, Provider, TextInput, RadioButton } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import _Button from '../../shared/core/ui/_Button';

const AddProduct = ({ navigation }: any) => {
  const sectionList = [
    {
      label: 'ADIDAS',
      value: 'adidas'
    },
    {
      label: 'DELL',
      value: 'dell'
    }
  ]

  const [section, setSection] = React.useState<string>("Product Section");
  const [sectionVisible, setSectionVisible] = React.useState(false);

  const openSectionMenu = () => setSectionVisible(true);
  const closeSectionMenu = () => setSectionVisible(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={{ position: 'absolute', left: 0 }} onPress={() => gotoPreviousScreen(navigation)}>
            <AntDesign name='left' color={'black'} size={24} />
          </TouchableOpacity>
          <_Text
            text='Add Product'
            size={16}
            weight='600'
            lineHeight={20}
          />
        </View>
        <Provider theme={DefaultTheme}>

          <View style={{ marginTop: 20, gap: 10 }}>
            <TextInput
              label={'Product Name'}
              style={{ backgroundColor: '#eee' }}
              mode='outlined'
            />
            <TextInput
              label={'Product Code'}
              style={{ backgroundColor: '#eee' }}
              mode='outlined'
            />
            <Menu
              visible={sectionVisible}
              onDismiss={closeSectionMenu}
              anchor={<Pressable onPress={openSectionMenu} style={styles.dropdown}>
                <_Text text={section} size={16} lineHeight={16} color='#555' />
                <AntDesign name='down' />
              </Pressable>}
              style={{ top: 210, left: 0, width: '100%' }}
            >
              {
                sectionList.map((section, index) => (
                  <Menu.Item key={index} title={section.label} onPress={() => { setSection(section.label); setSectionVisible(false); }} />
                ))
              }
            </Menu>
            <TextInput
              label={'Product Price'}
              style={{ backgroundColor: '#eee' }}
              mode='outlined'
            />
            <TextInput
              label={'Product Description'}
              style={{ backgroundColor: '#eee' }}
              multiline={true}
              numberOfLines={5}
              mode='outlined'
            />
            <TextInput
              label={'Product Tags'}
              style={{ backgroundColor: '#eee' }}
              mode='outlined'
            />
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', width: '50%' }}>
                <RadioButton value='publishnow' status='checked' />
                <_Text text='Publish Now' />
              </View>
              <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', width: '50%' }}>
                <RadioButton value='publishlater' />
                <_Text text='Publish Later' />
              </View>
            </View>
          </View>
        </Provider>
        <View style={styles.imageUpload}>
          <View style={styles.uploadheader}>
            <_Text text='Image Upload' size={16} lineHeight={16} weight='600' />
            <MaterialIcons name='error-outline' size={20} />
          </View>
          {
            [...Array(4)].map((_, index) => (
              <View key={index} style={styles.uploadItem}>
                <View style={styles.uploadImage}>
                  <_Text text={`Image ${index}`} color='#777' />
                </View>
                <View style={styles.choose}>
                  <_Text text='Choose File' color='#1b67ff' />
                  <AntDesign name='upload' color='#1b67ff' />
                </View>
              </View>
            ))
          }
          <_Text text='Add' size={16} lineHeight={16} weight='600' color='#046d8c' />
        </View>
        <_Button text='Proceed' py={15} filled onPress={() => {}} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: '5%'
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
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
    alignItems: 'center',
    marginTop: 5
  },
  imageUpload: {
    marginVertical: 20,
    gap: 15
  },
  uploadheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  uploadItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  uploadImage: {
    backgroundColor: '#f6f6f6',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  choose: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  }
})

export default AddProduct;
