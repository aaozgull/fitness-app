import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { List, TextInput, ActivityIndicator } from "react-native-paper";
//import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Avatar } from "react-native-paper";

import { selectCart, clearCart } from "../../../store/cartSlice";
import { colors } from "../../../infrastructure/theme/colors";
import SubmitButton from "../../../components/utility/SubmitButton";
import {
  payRequest,
  saveCart,
  loadCart,
} from "../../../utils/actions/checkoutActions";

const CheckoutScreen = ({ navigation }) => {
  //const dispatch = useDispatch();
  //const { cart, workout,clearCart, sum } = useContext(CartContext);
  const cart = selectCart();
  const workout = useSelector((state) => state.cart.workout);
  const userData = useSelector((state) => state.auth.userData);
  const [sum, setSum] = useState(0);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userData && userData.userId) {
      loadCart(userData.userId);
    }
  }, [userData]);

  useEffect(() => {
    if (userData && userData.userId) {
      saveCart(workout, cart, userData.userId);
    }
  }, [workout, cart, userData]);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const newSum = cart.reduce((acc, { price }) => {
      return (acc += price);
    }, 0);
    setSum(newSum);
  }, [cart]);
  /////above useEffect can me use in cart slice too. work on it

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      console.log("some error");
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card",
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccess");
      })
      .catch((err) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", {
          error: err,
        });
      });
  };

  useEffect(() => {
    onPay();
  }, []);

  if (!"cart".length || !"workout") {
    return (
      <View style={styles.container}>
        <View style={styles.cartIconContainer}>
          <Avatar.Icon
            icon="cart-off"
            size={128}
            backgroundColor={colors.ui.primary}
          />
          <Text>Your cart is empty!</Text>
        </View>
      </View>
    );
  }
  return (
    <View>
      {/* <RestaurantInfoCard restaurant={restaurant} /> */}//Fitness plan cards
      {isLoading && (
        <ActivityIndicator
          size={128}
          color={colors.ui.tertiary}
          animating={true}
          style={styles.indicator}
        />
      )}
      <ScrollView>
        {/*   <Spacer position="left" size="medium">
          <Spacer position="top" size="large"> */}
        <View>
          <View>
            <Text>Your Order</Text>
            <Text>{JSON.stringify(cart)}</Text>
            <Text>{JSON.stringify(workout)}</Text>
          </View>
          {/*   <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section> */}
          <Text>Total:{/*  {sum / 100} */}</Text>
        </View>
        <TextInput
          label="Name"
          value={name}
          style={styles.textInput}
          onChangeText={(t) => {
            setName(t);
          }}
        />
        {name.length > 0 && (
          <CreditCardInput
            name={name}
            onSuccess={setCard}
            onError={() =>
              navigation.navigate("CheckoutError", {
                error: "Something went wrong processing your credit card",
              })
            }
          />
        )}
        //add icone cash-usd
        <SubmitButton
          disabled={isLoading}
          title="Pay"
          style={styles.button}
          onPress={onPay}
        />
        <SubmitButton
          disabled={isLoading}
          title="clear"
          color={colors.ui.error500}
          style={styles.button}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
  cartIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarIcon: {
    backgroundColor: colors.ui.primary,
  },
  textInput: {
    margin: 12,
  },
  button: {
    margin: 20,
  },
  indicator: {
    position: absolute,
    top: "50%",
    left: "35%",
    zIndex: 999,
  },
});

export default CheckoutScreen;
