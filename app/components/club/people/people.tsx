import * as React from 'react'
import { View, StyleSheet, ScrollView, Pressable, Modal, Alert } from 'react-native';
import _Text from '../../../shared/core/ui/_Text';
import Profile from './profile';
import _Button from '../../../shared/core/ui/_Button';

const People = () => {

  const peopleList: Array<IPerson> = [
    {
      avatar: "",
      name: "Elon Musk",
      username: '@elonmusk . 19h',
      question: '$XELA apparently institutions been running since April 2020??',
      src: "",
      like: 6.5,
      comment: 22,
      share: 2.3
    }
  ]

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <Pressable style={styles.centeredView} onPress={() => setModalVisible(!modalVisible)}>
            <Pressable style={styles.modalView}>
              <View style={styles.uploadView}>
                <View style={{ paddingTop: 10, paddingLeft: 10 }}>
                  <_Text text='Write something' color='#777' />
                </View>
                <View style={{ alignItems: 'center', justifyContent: "flex-end", height: '100%', paddingBottom: 40 }}>
                  <_Text text='Upload Image' color='#1b67ff' />
                </View>
              </View>
              <_Button
                text='Post'
                py={10}
                filled
                onPress={() => setModalVisible(!modalVisible)} />
            </Pressable>
          </Pressable>
        </Modal>
        <Pressable style={styles.post} onPress={() => setModalVisible(true)}>
          <_Text text='Write something' color='#777' />
          <_Text text='Post' color='#1b67ff' />
        </Pressable>
        <View>
          {
            peopleList.map((person, index) => (
              <Profile key={index} person={person} />
            ))
          }
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '5%'
  },
  post: {
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    width: '90%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  uploadView: {
    backgroundColor: '#f6f6f6',
    height: 200,
    marginBottom: 20,
    borderRadius: 10
  }
})

export default People;