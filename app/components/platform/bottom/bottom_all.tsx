import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { platform_second_list } from '../../../shared/helper/mockData';
import _Bar from '../../../shared/core/ui/_Bar';
import _Text from '../../../shared/core/ui/_Text';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    header: {
        marginTop: '5%',
        marginBottom: '5%',
        paddingHorizontal: '5%'
    }
})

const AllBottom = ({ navigation }: any) => {
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Platform', { name: 'AllBottom' })}>
                        <AntDesign name='left' color={'black'} size={24} />
                    </TouchableOpacity>
                </View>
                <_Bar list={platform_second_list(navigation, 1)} />
            </View>
    )
}

export default AllBottom;