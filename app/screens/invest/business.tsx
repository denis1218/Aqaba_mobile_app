import * as React from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InvestLayout from '../../components/layout/investLayout';
import FooterLayout from '../../components/layout/footerLayout';
import _Text from '../../shared/core/ui/_Text';

const Business = ({ navigation }: any) => {

  const business_list = [
    {
      label: 'term loan',
      info: {
        header: 'Scale Up',
        description: 'with Term Loans for your business',
        list: [
          'Financing between $50,000 and $2 million SGD',
          'Interest rates as low as 0.8% per month',
          'No collateral required',
          'No lock in period'
        ]
      }
    },
    {
      label: 'invoice financing',
      info: {
        header: 'Obtain cash upfront',
        description: 'By converting your invoices',
        list: [
          'Credit line up to $1 million SGD',
          'Financing up to 80% of the invoice value',
          'Tenor up to 120 days',
          'No lock in period'
        ]
      }
    },
    {
      label: 'micro loans',
      info: {
        header: 'Business financing made simple',
        description: 'Obtain unsecured working between S$3,000 - S$100,000 to fuel your business',
        list: [
          'Apply in 2 minutes',
          'Disbursement as soon as 24 hours',
          'Rates from 1% onwards p/m',
          'Tenor range from 1 - 12 months',
          'No early repayment fees',
          'Loan amount up to $100,000'
        ]
      }
    },
    {
      label: 'supply chain financing',
      info: {
        header: 'Grow your business',
        description: 'Optimise your cash flow through Buyer Financing or Supplier Financing',
        list: [
          'We collaborate with corporate partners(Anchors) to provide financing to their supply chain network',
          'Customised to your network of Buyers or Suppliers',
          'All-in utilisation fee starting from as low as 1% pm',
          'No collateral required',
          'No lock in period'
        ]
      }
    },
    {
      label: 'revolving credit financing',
      info: {
        header: 'Flexible and ready credit line access',
        description: '',
        list: [
          'Revolving line of credit',
          'Flexible repayment and draw-down ability',
          'Ready access to funding to fulfill your business needs',
          'No early repayment fees',
          'no lock in period'
        ]
      }
    },
    {
      label: 'property-backend secured financing',
      info: {
        header: 'Convert your property into cash',
        description: 'as an equity term loan cash out',
        list: [
          'Financing up to $3 million SGD',
          'Interest rates as low as 0.6% per month',
          'Up to 80% of the property value',
          'No early repayment fees',
          'No lock in period'
        ]
      }
    },
  ]

  return (
    <InvestLayout>
      <View style={styles.container}>
        <ScrollView style={{ maxHeight: '90%' }}>
          <View style={styles.header}>
            <_Text text='Debt Financing' />
            <_Text text='Business financing made simple' size={24} weight='600' lineHeight={24} />
            <_Text text='Choose your financing method' color='#777' />
          </View>
          {
            business_list.map((business, index) => (
              <Pressable key={index} style={styles.watchlist} onPress={() => navigation.navigate('Apply', {info: business, name: 'Business'})}>
                <_Text
                  text={business.label}
                  weight='600'
                  textTransform='capitalize'
                />
                <AntDesign name='right' color='#1b67ff' size={16} />
              </Pressable>
            ))
          }
        </ScrollView>
      </View>
      <FooterLayout navigation={navigation} />
    </InvestLayout>
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
    marginBottom: 15
  },
  watchlist: {
    paddingHorizontal: '5%',
    paddingVertical: 20,
    backgroundColor: '#f6f6f6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 5
  }
})

export default Business;