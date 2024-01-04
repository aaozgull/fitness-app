import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { DashBoardScreen } from "./src/features/dashBoard/screens/dashBoard-screen";

export default function App() {
  return (
    <>
      <DashBoardScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
