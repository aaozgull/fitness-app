import {
  FlatList,
  Text,
  Dimensions,
  View,
  StyleSheet,
  Modal,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

//import ExpenseItem from './ExpenseItem';
import { getFormattedDate } from "../../../../utils/date";
import { theme } from "../../../../infrastructure/theme/index";

function BodyWeightDetail(props) {
  return (
    /*  <Modal visible={props.visible} animationType="slide" style={{ flex: 1 }}> */
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.text}>Body Weight</Text>
        <Text style={styles.text}>{getFormattedDate(new Date())}</Text>
      </View>
      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={500}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#2d0689", //"#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#a281f0", // "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(228, 217, 253, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(228, 217, 253, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#2d0689", // "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            marginRight: 8,

            borderRadius: 16,
          }}
        />
      </View>
    </View>
    /*  </Modal> */
  );
}

export default BodyWeightDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#2d0689",
  },
  headingContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  chartContainer: {
    //flex: 1,
    marginTop: 32,
  },
  text: {
    color: theme.colors.ui.primary50,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizesInNumber.body, //16,
    //padding: 4,
    fontWeight: "bold",
  },
});
