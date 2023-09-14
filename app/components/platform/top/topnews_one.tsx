import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import _Bar from '../../../shared/core/ui/_Bar';
import { gotoPreviousScreen } from '../../../shared/helper/common';
import _Text from '../../../shared/core/ui/_Text';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    header: {
        marginTop: '10%',
        marginBottom: '5%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const OneTop = ({ navigation }: any) => {

    const [info, setInfo]: any = React.useState();

    React.useEffect(() => {
        const routes = navigation.getState().routes;
        const info = routes[routes.length - 1].params.info;

        setInfo(info);
    }, [navigation])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{ position: 'absolute', left: '5%' }} onPress={() => gotoPreviousScreen(navigation)}>
                    <AntDesign name='left' color={'black'} size={24} />
                </TouchableOpacity>
                <_Text
                    text='Top News'
                    size={16}
                    weight='600'
                    lineHeight={20}
                />
            </View>
            <View style={{ width: '100%', paddingHorizontal: '5%', marginTop: '5%', gap: 10 }}>
                <_Text
                    text={info?.title}
                    size={11}
                    weight='800'
                    color='#01aded'
                />
                <_Text
                    text={info?.text}
                    size={18}
                    weight='600'
                    lineHeight={18}
                />
                <_Text
                    text={info?.description}
                    size={14}
                    lineHeight={20}
                />
            </View>
        </View>
    )
}

export default OneTop;