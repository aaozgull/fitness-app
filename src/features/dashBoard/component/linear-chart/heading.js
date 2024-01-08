import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
//import { GlobalStyles } from "../../constants/styles";
import { theme } from "../../../../infrastructure/theme";

function Heading() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>My Progress</Text>
      </View>
      <Divider bold="true" style={styles.divider} />
    </>
  );
}

export default Heading;

const styles = StyleSheet.create({
  container: {
    padding: theme.space[3], //16,
    // backgroundColor: "#e4d9fd", // GlobalStyles.colors.primary50,
    borderRadius: theme.sizes[1], // 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    color: "#e4d9fd", //"#5721d4", //GlobalStyles.colors.primary400,
  },
  divider: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e4d9fd",
  },
});
