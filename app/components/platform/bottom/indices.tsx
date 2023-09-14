import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import _Text from '../../../shared/core/ui/_Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LineChart } from 'react-native-chart-kit';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export const indices = [
    {
        title: 'nifty',
        subtitle: 'nifty 50 index',
        totalAmount: 17928.85,
        plusPercent: 0.70,
        plusAmount: 122.85
    },
    {
        title: 'bse sensex',
        subtitle: 'S&P bse sensex index',
        totalAmount: 60307.81,
        plusPercent: 0.75,
        plusAmount: 451.88
    },
    {
        title: 'S&P 500',
        subtitle: 'S&P 500 index',
        totalAmount: 4793.53,
        plusPercent: -3.04,
        plusAmount: 451.88
    },
    {
        title: 'nifty',
        subtitle: 'nifty 50 index',
        totalAmount: 17928.85,
        plusPercent: 0.70,
        plusAmount: 122.85
    },
    {
        title: 'bse sensex',
        subtitle: 'S&P bse sensex index',
        totalAmount: 60307.81,
        plusPercent: 0.75,
        plusAmount: 451.88
    },
    {
        title: 'S&P 500',
        subtitle: 'S&P 500 index',
        totalAmount: 4793.53,
        plusPercent: -3.04,
        plusAmount: 451.88
    },
    {
        title: 'nifty',
        subtitle: 'nifty 50 index',
        totalAmount: 17928.85,
        plusPercent: 0.70,
        plusAmount: 122.85
    },
    {
        title: 'bse sensex',
        subtitle: 'S&P bse sensex index',
        totalAmount: 60307.81,
        plusPercent: 0.75,
        plusAmount: 451.88
    },
    {
        title: 'S&P 500',
        subtitle: 'S&P 500 index',
        totalAmount: 4793.53,
        plusPercent: -3.04,
        plusAmount: 451.88
    }
];

const Indices = ({ navigation, type }: any) => {
    const [curIndex, setCurIndex] = React.useState(0);
    const [curIndice, setCurIndice] = React.useState(indices[curIndex]);

    return (
        <View style={styles.container}>
            {type == 0 && <View style={styles.header}>
                <View style={{ gap: 5, justifyContent: 'center' }}>
                    <_Text
                        text={curIndice.title}
                        size={13}
                    />
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <_Text
                            text={curIndice.subtitle}
                            size={10}
                            color='gray'
                        />
                        <AntDesign name='down' color='black' size={16} />
                    </View>
                </View>
                <View style={{ gap: 5, alignItems: 'flex-end' }}>
                    <_Text
                        text={`${curIndice.totalAmount}`}
                        size={13}
                    />
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <_Text
                            text={`${curIndice.plusPercent > 0 ? '+' : ''}${curIndice.plusPercent}${curIndice.plusPercent > 0 ? '%' : ''}`}
                            color={curIndice.plusPercent > 0 ? '#5cc0b0' : '#ed3f4d'}
                            size={10}
                        />
                        <_Text
                            text={`${curIndice.plusAmount}`}
                            size={10}
                        />
                    </View>
                </View>
            </View>}
            <TouchableOpacity style={{ marginTop: 10 }} onPress={() => navigation.navigate('AllBottom', { name: 'Platform' })}>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "blue",
                        backgroundGradientFrom: "white",
                        backgroundGradientTo: "white",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "2",
                            strokeWidth: "3",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </TouchableOpacity>
            { type == 1 && 
            <ScrollView style={{ height: '80%', width: '100%' }}>
                {
                    indices.map((indice, index) => (
                        <TouchableOpacity key={index} style={{ width: '100%' }} onPress={() => setCurIndex(index)}>
                            <View style={[styles.header, { borderWidth: curIndex == index ? 1 : 0, borderColor: '#3478ff', paddingHorizontal: 10, paddingVertical: 15, borderRadius: 10 }]}>
                                <View style={{ gap: 5, justifyContent: 'center' }}>
                                    <_Text
                                        text={indice.title}
                                        size={13}
                                        textTransform='uppercase'
                                    />
                                    <View style={{ flexDirection: 'row', gap: 20 }}>
                                        <_Text
                                            text={indice.subtitle}
                                            size={10}
                                            color='gray'
                                            textTransform='uppercase'
                                        />
                                    </View>
                                </View>
                                <View style={{ gap: 5, alignItems: 'flex-end' }}>
                                    <_Text
                                        text={`${indice.totalAmount}`}
                                        color={indice.plusPercent > 0 ? '#5cc0b0' : '#ed3f4d'}
                                        size={12}
                                    />
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <_Text
                                            text={`${indice.plusPercent > 0 ? '+' : ''}${indice.plusPercent}${indice.plusPercent > 0 ? '%' : ''}`}
                                            color={indice.plusPercent > 0 ? '#5cc0b0' : '#ed3f4d'}
                                            size={10}
                                        />
                                        <_Text
                                            text={`+${indice.plusAmount}`}
                                            size={10}
                                        />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView> }
        </View>
    )
}

export default Indices;