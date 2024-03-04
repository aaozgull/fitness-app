import React, { useContext, useState } from "react";
import {
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";

import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { WorkoutInfoCard } from "../components/WorkoutInfoCard";

//import { Search } from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/FavouritesBar";
import { FadeInView } from "../../../components/animations/fade.animation";

const WorkoutScreen = ({ navigation }) => {
  const { isLoading, error, workouts } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  console.log(error);
  return (
    <SafeAreaView style={styles.safeArea}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            style={{ marginLeft: -25 }}
            size={50}
            animating={true}
            color={MD2Colors.blue300}
          />
        </View>
      )}

      {/*   <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )} */}
      <FlatList
        style={{ padding: 16 }}
        data={workouts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("WorkoutDetail", {
                  workout: item,
                })
              }
            >
              {/*  <Spacer position="bottom" size="large"> */}
              <View style={styles.spaceBottom}>
                <FadeInView>
                  <WorkoutInfoCard workout={item} />
                </FadeInView>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};
export default WorkoutScreen;
const styles = StyleSheet.create({
  loadingContainer: {
    position: absolute,
    top: "50%",
    left: "50%",
  },
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.bg.primary,
  },
  spaceBottom: {
    marginBottom: 16,
  },
});
