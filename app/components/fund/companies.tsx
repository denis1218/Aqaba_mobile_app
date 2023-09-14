import * as React from 'react'
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import _Text from '../../shared/core/ui/_Text';
import Entypo from 'react-native-vector-icons/Entypo';

export const company_list = [
  {
    src: "",
    name: "FastMoney",
    description: "We're a neobanking platform that is fast changing the way business banking rolls",
    location: "Bangalore, Karnataka, India",
    highlights: {
      stockSymbol: 'FRA:DHER',
      acquisitions: 28,
      investments: 27,
      exits: 8,
      totalFundingAmount: 8.3,
      contacts: 219,
      about: 'Delivery Hero is a network of online food ordering sites with over 100 restaurant partners worldwide.',
      website: 'www.deliveryhero.com'
    }
  },
  {
    src: "",
    name: "Glovo",
    description: "We're a neobanking platform that is fast changing the way business banking rolls",
    location: "Bangalore, Karnataka, India",
    highlights: {
      stockSymbol: 'FRA:DHER',
      acquisitions: 28,
      investments: 27,
      exits: 8,
      totalFundingAmount: 8.3,
      contacts: 219,
      about: 'Delivery Hero is a network of online food ordering sites with over 100 restaurant partners worldwide.',
      website: 'www.deliveryhero.com'
    }
  },
  {
    src: "",
    name: "Delivery Hero",
    description: "We're a neobanking platform that is fast changing the way business banking rolls",
    location: "Berlin, Berlin, Germany",
    highlights: {
      stockSymbol: 'FRA:DHER',
      acquisitions: 28,
      investments: 27,
      exits: 8,
      totalFundingAmount: 8.3,
      contacts: 219,
      about: 'Delivery Hero is a network of online food ordering sites with over 100 restaurant partners worldwide.',
      website: 'www.deliveryhero.com'
    }
  }
]

const Companies = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      {
        company_list.map((info, index) => (
          <Pressable key={index} style={styles.card} onPress={() => navigation.navigate('CompanyIndividual', { name: 'Fund', info: info })}>
            <View style={styles.top}>
              {/* <Image source={info.src} /> */}
              <View style={{ gap: 5 }}>
                <_Text text={info.name} size={16} weight='600' />
                <_Text text={info.description} size={12} color='#777' />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                <Entypo name='location-pin' color={'black'} size={16} />
                <_Text text={info.location} size={10} />
              </View>
              <_Text text='View Details' size={14} color='#1b67ff' />
            </View>
          </Pressable>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    backgroundColor: '#f6f6f6'
  },
  card: {
    backgroundColor: 'white',
    padding: '5%',
    gap: 20
  },
  top: {}
})

export default Companies;