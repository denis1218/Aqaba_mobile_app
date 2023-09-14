import * as React from 'react'
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _Text from '../../../shared/core/ui/_Text';
import { useAppSelector } from '../../../store/hooks';
import { gotoPreviousScreen } from '../../../shared/helper/common';

const Header = ({ navigation, step }: any) => {

	const { cartList } = useAppSelector(state => state.cart)

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Pressable onPress={() => gotoPreviousScreen(navigation)}>
					<AntDesign name='left' color={'black'} size={16} />
				</Pressable>
				<_Text text='Checkout' size={18} lineHeight={18} weight='600' />
				<View style={{ position: 'relative' }}>
					<Ionicons name='cart' size={30} color={'black'} />
					<View style={styles.cartcount}>
						<_Text text={`${cartList.length}`} size={12} />
					</View>
				</View>
			</View>
			<View style={styles.progress}>
				<_Text text='Shipping Address' weight={step >= 1 ? '600' : 'normal'} />
				<AntDesign name='right' color={'black'} />
				<_Text text='Delivery Method' weight={step >= 2 ? '600' : 'normal'} />
				<AntDesign name='right' color={'black'} />
				<_Text text='Payment Info' weight={step >= 3 ? '600' : 'normal'} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: 'white'
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20
	},
	cartcount: {
		position: 'absolute',
		backgroundColor: 'white',
		borderRadius: 10,
		width: 15,
		height: 15,
		right: -5,
		top: 0,
		alignItems: 'center',
		justifyContent: 'center'
	},
	progress: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})

export default Header