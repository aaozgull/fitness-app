import React from "react";
import CheckoutScreen from "../../features/Checkout/screens/CheckoutScreen";
import CheckoutErrorScreen from "../../features/Checkout/screens/CheckoutErrorScreen";
import CheckoutSuccessScreen from "../../features/Checkout/screens/CheckoutSuccessScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const CheckoutStack = createNativeStackNavigator();

const checkoutNavigator = () => {
  return (
    <CheckoutStack.Navigator headerMode="none">
      <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
      <CheckoutStack.Screen
        name="CheckoutSuccess"
        component={CheckoutSuccessScreen}
      />
      <CheckoutStack.Screen
        name="CheckoutError"
        component={CheckoutErrorScreen}
      />
    </CheckoutStack.Navigator>
  );
};

export default checkoutNavigator;
