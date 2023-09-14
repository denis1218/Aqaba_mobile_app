import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import _Bar from '../../../shared/core/ui/_Bar';
import { platfrom_first_list } from '../../../shared/helper/mockData';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    header: {
        marginTop: '5%',
        marginBottom: '5%',
        paddingHorizontal: '5%'
    }
})

const AllTop = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Platform', { name: 'AllTop' })}>
                    <AntDesign name='left' color={'black'} size={24} />
                </TouchableOpacity>
            </View>
            <_Bar list={platfrom_first_list(navigation, 1)} />
        </View>
    )
}

export default AllTop;