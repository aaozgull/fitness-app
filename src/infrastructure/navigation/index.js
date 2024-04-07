import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
//import AuthScreen from "../../features/account/screens/AuthScreen";
import { AuthNavigator } from "./auth.navigator";
import StartUpScreen from "../../features/account/screens/StartUpScreen";
export const Navigation = () => {
  const isAuth = useSelector(
    (state) => state.auth.token !== null && state.auth.token !== ""
  );
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);
  const isNewRegistration = useSelector(
    (state) => state.auth.isNewRegistration
  );
  console.log(isAuth);
  return (
    <NavigationContainer>
      {isAuth && !isNewRegistration && <AppNavigator />}
      {isAuth && isNewRegistration && <AccountNavigator />}

      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {/*<AuthScreen />*/}
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
    </NavigationContainer>
  );
};
