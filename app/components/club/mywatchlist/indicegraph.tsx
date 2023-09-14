import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { gotoPreviousScreen } from '../../../shared/helper/common';
import _Text from '../../../shared/core/ui/_Text';
import { LineChart } from 'react-native-chart-kit';

const IndiceGraph = ({ navigation }: any) => {
  const [info, setInfo]: any = React.useState();

  React.useEffect(() => {
    const routes = navigation.getState().routes;
    const info = routes[routes.length - 1].params.info;

    setInfo(info);
  }, [navigation])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => gotoPreviousScreen(navigation)} style={{ width: '100%' }}>
          <View style={{ position: 'absolute', left: 0 }}>
            <AntDesign name='left' color={'black'} size={16} />
          </View>
        </TouchableOpacity>
        <_Text text={info?.title} size={16} weight='600' lineHeight={16} textTransform='capitalize' />
      </View>
      <View>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  1, 2, 3, 4, 5, 6
                ]
              }
            ]
          }}
          segments={5}
          width={Dimensions.get("window").width} // from react-native
          height={Dimensions.get("screen").height * 0.9}
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
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: '5%',
    paddingHorizontal: '5%',
    backgroundColor: 'white'
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default IndiceGraph;