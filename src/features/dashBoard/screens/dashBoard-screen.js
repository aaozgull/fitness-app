import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Pressable,
} from "react-native";
//import styled from "styled-components/native";

import { theme } from "../../../infrastructure/theme/index";
import ToDoSummary from "../component/toDoList/dashBoard-toDo-summary";
import BezierLineChartCard from "../component/linear-chart/bezier-line-chartCard";
import BezierLineChart from "../component/linear-chart/bezier-line-chart";
import PhotoCard from "../component/photos/photo-card";
import Heading from "../component/linear-chart/heading";

export const DashBoardScreen = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showProgressHandler() {
    setModalIsVisible(true);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.summary}>
        {/*  <Searchbar /> */}
        <ToDoSummary />
      </View>
      {/*  <View style={styles.toDolist}>
      <ToDoOutput />
    </View> */}
      <Heading />
      <View style={styles.progressContainer}>
        <View style={styles.graph}>
          <Pressable
            android_ripple={{ color: "#210644" }}
            onPress={showProgressHandler}
            style={({ pressed }) => pressed && styles.pressedItem}
          >
            <BezierLineChartCard />
            <BezierLineChart visible={modalIsVisible} />
          </Pressable>
        </View>
        <View style={styles.photo}>
          <PhotoCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: theme.colors.bg.primary, //"#2d0689",
  },
  progressContainer: {
    //padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summary: {
    flex: 1,
    paddingTop: theme.space[4], //32,
  },
  toDolist: {
    flex: 1,
    paddingBottom: theme.space[3],
    paddingRight: theme.space[3],
    paddingLeft: theme.space[3],
  },
  graph: {
    flex: 1,
    padding: theme.space[3],
  },
  photo: {
    flex: 1,
    padding: theme.space[3],
  },
  pressedItem: {
    opacity: 0.5,
  },
});
