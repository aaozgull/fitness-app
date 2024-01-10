import { FlatList, Text, Dimensions, View, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { theme } from "../../../../infrastructure/theme/index";

//import ExpenseItem from './ExpenseItem';
import { getFormattedDate } from "../../../../utils/date";

function BezierLineChartCard() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Body Weight</Text>
        <Text style={styles.text}>{getFormattedDate(new Date())}</Text>
      </View>
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
        width={Dimensions.get("window").width / 2} // from react-native
        height={170}
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
  );
}

export default BezierLineChartCard;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  text: {
    // fontSize: 16,
    // color: "#ffff", //"#5721d4", //GlobalStyles.colors.primary400,
    color: theme.colors.ui.primary50,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.body, //16,
    //padding: 4,
    fontWeight: "bold",
  },
});
