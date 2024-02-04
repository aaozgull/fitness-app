import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
