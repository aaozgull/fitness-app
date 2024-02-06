import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../infrastructure/theme/index";
import { getFormattedDate } from "../../utils/date";

export default Heading = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={{ ...styles.text, ...props.textStyle }}>{props.title}</Text>
      <Text style={styles.date}>{getFormattedDate(new Date())}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 10,
    // backgroundColor: theme.colors.ui.primary,
  },
  text: {
    fontSize: theme.fontSizesInNumber.body, //16,
    fontFamily: "bold",
    letterSpacing: 0.3,
    color: theme.colors.text.primary,
    // letterSpacing: 0.3,
  },
  /*  text: {
    // fontSize: 16,
    // color: "#ffff", //"#5721d4", //GlobalStyles.colors.primary400,
    color: theme.colors.text.primary,
    fontFamily: "regular",
    fontSize: theme.fontSizesInNumber.body, //16,
    //padding: 4,
    fontWeight: "bold",
  }, */
  date: {
    color: theme.colors.text.secondary,
    fontFamily: "regular",
    letterSpacing: 0.3,
    fontSize: theme.fontSizesInNumber.body, //16,
  },
});
