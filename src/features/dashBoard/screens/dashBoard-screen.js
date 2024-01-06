//import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";

import ToDoOutput from "../component/toDoList/dashBoard-toDo-list-comonent";
import ToDoSummary from "../component/toDoList/dashBoard-toDo-summary";
import BezierLineChart from "../component/linear-chart/bezier-line-chart";
import PhotoCard from "../component/photos/photo-card";
import Heading from "../component/linear-chart/heading";

export const DashBoardScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.summary}>
      {/*  <Searchbar /> */}
      <ToDoSummary />
    </View>
    <View style={styles.toDolist}>
      <ToDoOutput expensesPeriod="Last 7 Days" />
    </View>
    <Heading />
    <View style={styles.progressContainer}>
      <View style={styles.graph}>
        <BezierLineChart />
      </View>
      <View style={styles.photo}>
        <PhotoCard />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#2d0689",
  },
  progressContainer: {
    padding: 8,
    // backgroundColor: "#e4d9fd", // GlobalStyles.colors.primary50,
    // borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summary: {
    paddingTop: 32,
    paddingRight: 32,
    paddingLeft: 32,
    //paddingBottom: 8,
  },
  toDolist: {
    flex: 1,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
  graph: {
    flex: 1,
    // padding: 16,
  },
  photo: {
    flex: 1,
    // padding: 16,
  },
});
