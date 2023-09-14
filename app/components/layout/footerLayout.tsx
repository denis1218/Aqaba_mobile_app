import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import _Text from '../../shared/core/ui/_Text';
import { Shadow } from 'react-native-shadow-2';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'white',

        flexDirection: 'row',
        justifyContent: 'space-around',

        paddingTop: 15,
        paddingBottom: 30
    }
})

const FooterLayout = ({navigation}: any) => {

    const list = [
        {
            label: "1",
            onPress: () => {navigation.navigate('Platform', { name: 'Platform' })}
        },
        {
            label: "2",
            onPress: () => {navigation.navigate('Fund', { name: 'Fund' })}
        },
        {
            label: "3",
            onPress: () => {navigation.navigate('Business', { name: 'Business' })}
        },
        {
            label: "4",
            onPress: () => {navigation.navigate('Club', { name: 'Club' })}
        },
        {
            label: "5",
            onPress: () => {navigation.navigate('Marketplace', { name: 'Marketplace' })}
        }
    ]

    return (
        <Shadow distance={80} offset={[0, 0]}>
            <View style={styles.container}>
                {
                    list.map((item, index) => (
                        <TouchableOpacity key={index} onPress={item.onPress}>
                            <_Text
                                text={`${item.label}`}
                            />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </Shadow>
    )
}

export default FooterLayout