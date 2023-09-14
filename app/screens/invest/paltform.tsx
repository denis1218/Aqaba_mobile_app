import * as React from 'react'
import { View, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import InvestLayout from '../../components/layout/investLayout';
import _Text from '../../shared/core/ui/_Text';
import _Bar from '../../shared/core/ui/_Bar';
import { platform_second_list, platfrom_first_list } from '../../shared/helper/mockData';
import FooterLayout from '../../components/layout/footerLayout';

const Platform = ({navigation}: any) => {
  // const nav = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <InvestLayout>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.top}>
              <View style={{ width: '40%' }}>
                <_Text
                  text='AQABA INVEST PALTFORM'
                  weight='800'
                  color='#163659'
                />
              </View>
              <View>
                <AntDesign name='search1' size={20} color={'black'} />
              </View>
            </View>
            <View style={styles.bottom}>
              <View>
                <View style={{ gap: 3 }}>
                  <_Text
                    text='NASDAQ COMPOSITE'
                    size={12}
                    weight='600'
                  />
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <_Text
                      text='-1.33%'
                      color='red'
                      size={12}
                    />
                    <_Text
                      text='-210'
                      size={12}
                    />
                    <_Text
                      text='15622.72'
                      size={12}
                    />
                  </View>
                </View>
              </View>
              <View>
                <View style={{ gap: 3 }}>
                  <_Text
                    text='S&P 500'
                    size={12}
                    weight='600'
                  />
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <_Text
                      text='-1.33%'
                      color='#22aa93'
                      size={12}
                    />
                    <_Text
                      text='+3.04'
                      size={12}
                    />
                    <_Text
                      text='4793.53'
                      size={12}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <_Bar list={platfrom_first_list(navigation, 0)} />
            <View style={{ height: '5%' }}></View>
            <_Bar list={platform_second_list(navigation, 0)} />
          </View>
        </View>
      </ScrollView>
      <FooterLayout navigation={navigation} />
    </InvestLayout>
  )
}

export default Platform;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingVertical: 30,
    marginBottom: 50
  },
  header: {
    width: '100%'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%'
  },
  bottom: {
    marginVertical: '3%',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})