import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { DashBoardScreen } from "./src/features/dashBoard/screens/dashBoard-screen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

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
      <DashBoardScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
