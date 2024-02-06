import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, StyleSheet, Text } from "react-native";
/* import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"; */
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";

const firebaseConfig = {
  apiKey: "AIzaSyDV9HxttWHRjEgU14euBemOrXRb_LRSekQ",
  authDomain: "my-meals-app-2d85d.firebaseapp.com",
  projectId: "my-meals-app-2d85d",
  storageBucket: "my-meals-app-2d85d.appspot.com",
  messagingSenderId: "236556680367",
  appId: "1:236556680367:web:f19f83755fa04aba0aa85a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require("./assets/fonts//Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          italic: require("./assets/fonts/Roboto-Italic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          thin: require("./assets/fonts/Roboto-Thin.ttf"),
          thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });
      } catch (error) {
        console.log.error();
      } finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }
  /* const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  } */
  return (
    <>
      <SafeAreaProvider style={styles.container} onLayout={onLayout}>
        <Navigation />
      </SafeAreaProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    color: "black",
    fontSize: 18,
    fontFamily: "regular",
  },
});
