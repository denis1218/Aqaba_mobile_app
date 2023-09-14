import * as React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import InvestLayout from '../../components/layout/investLayout'
import FooterLayout from '../../components/layout/footerLayout'
import _Button from '../../shared/core/ui/_Button'
import _Text from '../../shared/core/ui/_Text'
import _Bar from '../../shared/core/ui/_Bar'
import { fund_list } from '../../shared/helper/mockData'

const Fund = ({ navigation }: any) => {
  return (
    <InvestLayout>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <_Text text='Investment Fund' size={18} lineHeight={18} weight='600' />
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10 }}>
              <View style={{ width: '48%'}}>
                <_Button
                  text='My Watchlist'
                  py={10}
                  color='#1b67ff'
                  onPress={() => {navigation.navigate('CompanyList', {name: 'Fund'})}}
                />
              </View>
              <View style={{ width: '48%'}}>
                <_Button
                  text='Add your Company'
                  py={10}
                  onPress={() => { }}
                  filled
                />
              </View>
            </View>
          </View>
          <_Bar list={fund_list(navigation, 0)} />
        </View>
      </ScrollView>
      <FooterLayout navigation={navigation} />
    </InvestLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingBottom: '5%'
  },
  header: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    gap: 10
  }
})

export default Fund
