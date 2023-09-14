import * as React from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import _Text from '../../../shared/core/ui/_Text';
import _Bar from '../../../shared/core/ui/_Bar';
import { company_individual_list } from '../../../shared/helper/mockData';
import _Button from '../../../shared/core/ui/_Button';

const CompanyIndividual = ({ navigation }: any) => {
  const [info, setInfo]: any = React.useState();

  React.useEffect(() => {
    const routes = navigation.getState().routes;
    const info = routes[routes.length - 1].params.info;

    console.log(info);
    setInfo(info);
  }, [navigation])

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Fund', { name: 'CompanyIndividual' })} style={{ width: '100%' }}>
          <View style={{ position: 'absolute', left: '5%' }}>
            <AntDesign name='left' color={'black'} size={16} />
          </View>
        </TouchableOpacity>
        <_Text text='Company Details' size={16} weight='600' lineHeight={16} />
      </View>
      <View style={styles.summary}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ justifyContent: 'space-between' }}>
            <View style={{ gap: 5 }}>
              <_Text text='Organization' color='#777' />
              <_Text text='Delivery Hero' size={16} lineHeight={16} weight='600' />
            </View>
            <View style={{ flexDirection: 'row', gap: 5}}>
              <Entypo name='location-pin' color={'black'} size={16} />
              <_Text text={info?.location} color='#777' />
            </View>
          </View>
        </View>
        <View style={{ width: '45%'}}>
          <_Button
            text='Add your Watchlist'
            py={15}
            borderRadius={5}
            filled
            onPress={() => {}}
          />
        </View>
      </View>
      <_Bar list={company_individual_list(navigation, info)} />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: '5%'
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summary: {
    gap: 15,
    padding: '5%'
  }
})

export default CompanyIndividual