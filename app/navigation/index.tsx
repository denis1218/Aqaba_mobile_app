import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screens/onboarding/onboarding';
import Welcome from '../screens/auth/welcome';
import SignUp from '../screens/auth/signup';
import LogIn from '../screens/auth/login';
import Platform from '../screens/invest/paltform';
import AllTop from '../components/platform/top/top_all';
import OneTopNews from '../components/platform/top/topnews_one';
import AllBottom from '../components/platform/bottom/bottom_all';
import Club from '../screens/invest/club';
import MyWatchList from '../components/club/mywatchlist';
import IndiceGraph from '../components/club/mywatchlist/indicegraph';
import Business from '../screens/invest/business';
import Apply from '../components/business/apply';
import Fund from '../screens/invest/fund';
import CompanyList from '../components/fund/company_list';
import CompanyIndividual from '../components/fund/individual';
import Marketplace from '../screens/invest/marketplace';
import MyCart from '../components/marketplace/mycart';
import ShippingAddress from '../components/marketplace/checkout/shippingAddress';
import DeliveryMethod from '../components/marketplace/checkout/deliveryMethod';
import PaymentInfo from '../components/marketplace/checkout/paymentInfo';
import AddProduct from '../components/marketplace/addproduct';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName='OnBoarding'
      >
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='OnBoarding' component={OnBoarding} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='Welcome' component={Welcome} />
          <RootStack.Screen name='SignUp' component={SignUp} />
          <RootStack.Screen name='LogIn' component={LogIn} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='Platform' component={Platform} />
          <RootStack.Screen name='AllTop' component={AllTop} />
          <RootStack.Screen name='OneTopNews' component={OneTopNews} />
          <RootStack.Screen name='AllBottom' component={AllBottom} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='Fund' component={Fund} />
          <RootStack.Screen name='CompanyList' component={CompanyList} />
          <RootStack.Screen name='CompanyIndividual' component={CompanyIndividual} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='Business' component={Business} />
          <RootStack.Screen name='Apply' component={Apply} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='Club' component={Club} />
          <RootStack.Screen name='MyWatchList' component={MyWatchList} />
          <RootStack.Screen name='IndiceGraph' component={IndiceGraph} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='Marketplace' component={Marketplace} />
          <RootStack.Screen name='MyCart' component={MyCart} />
          <RootStack.Screen name='ShippingAddress' component={ShippingAddress} />
          <RootStack.Screen name='DeliveryMethod' component={DeliveryMethod} />
          <RootStack.Screen name='PaymentInfo' component={PaymentInfo} />
          <RootStack.Screen name='AddProduct' component={AddProduct} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;
