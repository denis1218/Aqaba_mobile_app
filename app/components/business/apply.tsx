import * as React from 'react'
import { View, StyleSheet, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import _Text from '../../shared/core/ui/_Text';
import _Button from '../../shared/core/ui/_Button';

const Apply = ({ navigation }: any) => {

  const [info, setInfo]: any = React.useState();

  React.useEffect(() => {
    const routes = navigation.getState().routes;
    const info = routes[routes.length - 1].params.info;

    setInfo(info);
  }, [navigation])

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Business', { name: 'Apply' })}>
        <AntDesign name='left' color={'black'} size={16} />
      </Pressable>
      <View style={styles.header}>
        <_Text text={info?.label} textTransform='capitalize' color='#777' />
        <_Text text={info?.info.header} size={24} lineHeight={24} weight='800' />
        { info?.info.description != "" && <_Text text={info?.info.description} /> }
      </View>
      <View style={styles.body}>
        {
          info?.info.list.map((item: string, index: number) => (
            <View key={index} style={styles.item}>
              <AntDesign name='check' color={'#22aa93'} size={16} />
              <_Text text={item} />
            </View>
          ))
        }
      </View>
      <View style={styles.footer}>
        <_Button 
          text='Apply Now' 
          py={15} 
          filled
          onPress={() => {}}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
          <_Text text='Have applied already?' color='#777' />
          <_Text text='Check your application' color='#1b67ff' weight='600' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingTop: '5%'
  },
  header: {
    gap: 10,
    marginVertical: 15
  },
  body: {
    marginVertical: 20,
    gap: 14
  },
  item: {
    gap: 15,
    flexDirection: 'row'
  },
  footer: {
    gap: 15
  }
})

export default Apply;