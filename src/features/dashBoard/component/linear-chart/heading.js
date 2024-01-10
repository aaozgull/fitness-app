import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
//import { GlobalStyles } from "../../constants/styles";
import { theme } from "../../../../infrastructure/theme";

function Heading() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>My Progress</Text>
        <View style={styles.dividerContainer}>
          <Divider bold="true" style={styles.divider} />
        </View>
      </View>
    </>
  );
}

export default Heading;

const styles = StyleSheet.create({
  container: {
    padding: theme.space[4], //16,
    // backgroundColor: "#e4d9fd", // GlobalStyles.colors.primary50,
    //borderRadius: theme.sizes[1], // 6,
    //flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: theme.colors.ui.gray500,
  },
  heading: {
    // fontSize: 20,
    // color: "#e4d9fd", //"#5721d4", //GlobalStyles.colors.primary400,

    color: theme.colors.ui.primary50,
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.title, //16,
    //padding: 4,
    //fontWeight: "bold",

    // fontFamily: theme.fonts.heading,
    // fontSize: theme.fontSizes.title,
    //color: theme.colors.ui.primary400,
  },
  dividerContainer: {
    paddingTop: theme.space[2],
    // backgroundColor: theme.colors.ui.error50,
  },
  divider: {
    // fontSize: 20,
    // fontWeight: "bold",
    // color: "#e4d9fd",

    color: theme.colors.ui.primary50,
    //fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.title,
  },
});
