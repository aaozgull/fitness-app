import React, { useState } from "react";

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
import BodyWeight from "../component/linear-chart/bodyWeight";
import PhotoCard from "../../photoGallery/screen/photo-card";
import PageTitle from "../../../components/utility/PageTitle";

export const DashBoardScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Close" onPress={() => props.navigation.goBack()} />
          </HeaderButtons>
        );
      },
      headerTitle: "DashBoard",
    });
  }, []);

  function showBodyWeightHandler() {
    navigation.navigate("bodyWeightDetail");
    //PhotoInfoCard
  }
  function showGalleryHandler() {
    navigation.navigate("GalleryScreen");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.summary}>
        <ToDoSummary />
      </View>

      <PageTitle title="My Progress" />
      <View style={styles.progressContainer}>
        <View style={styles.graph}>
          <Pressable
            android_ripple={{ color: "#210644" }}
            onPress={showBodyWeightHandler}
            style={({ pressed }) => pressed && styles.pressedItem}
          >
            <BodyWeight />
          </Pressable>
        </View>
        <View style={styles.photo}>
          <Pressable
            android_ripple={{ color: "#210644" }}
            onPress={showGalleryHandler}
            style={({ pressed }) => pressed && styles.pressedItem}
          >
            <PhotoCard />
          </Pressable>
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
    //padding: theme.spaceInNumber[3],
  },
  summary: {
    flex: 1,
    paddingTop: theme.spaceInNumber[4], //32,
  },
  graph: {
    flex: 1,
    // paddingBottom: theme.spaceInNumber[3],
    //paddingRight: theme.spaceInNumber[3],
    marginLeft: theme.spaceInNumber[2],
    marginBottom: theme.spaceInNumber[4],
  },
  photo: {
    flex: 1,
    // padding: theme.spaceInNumber[1],
    marginTop: theme.spaceInNumber[3],
    //height: 200,
    // paddingBottom: theme.spaceInNumber[3],
    // paddingLeft: theme.spaceInNumber[3],
    // paddingRight: theme.spaceInNumber[3],
  },
  pressedItem: {
    opacity: 0.5,
  },
});
