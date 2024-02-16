import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { child, getDatabase, off, onValue, ref } from "firebase/database";

import { getFirebaseApp } from "../../utils/firebaseHelper";
import { setChatsData } from "../store/chatSlice";
import { colors } from "../theme/colors";
import commonStyles from "../../constants/commonStyles";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BodyWeightDetail from "../../features/dashBoard/component/linear-chart/bodyWeightDetail";
import { DashBoardScreen } from "../../features/dashBoard/screens/dashBoard-screen";
import { GalleryScreen } from "../../features/photoGallery/screen/gallery-screen";

const DashBoardStack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <DashBoardStack.Navigator>
      <Stack.Group>
        <DashBoardStack.Screen
          name="DashBoardScreen"
          component={DashBoardScreen}
        />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: "containedModal" }}>
        <DashBoardStack.Screen
          name="bodyWeightDetail"
          component={BodyWeightDetail}
        />
        <DashBoardStack.Screen name="GalleryScreen" component={GalleryScreen} />
      </Stack.Group>
    </DashBoardStack.Navigator>
  );
};

const DashBoardNavigator = (props) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const userData = useSelector((state) => state.auth.userData);
  const storedUsers = useSelector((state) => state.users.storedUsers);

  useEffect(() => {
    console.log("Subscribing to firebase listeners");

    const app = getFirebaseApp();
    const dbRef = ref(getDatabase(app));
    const userChatsRef = child(dbRef, `userChats/${userData.userId}`);
    const refs = [userChatsRef];

    onValue(userChatsRef, (querySnapshot) => {
      const chatIdsData = querySnapshot.val() || {};
      const chatIds = Object.values(chatIdsData);

      const chatsData = {};
      let chatsFoundCount = 0;

      for (let i = 0; i < chatIds.length; i++) {
        const chatId = chatIds[i];
        const chatRef = child(dbRef, `chats/${chatId}`);
        refs.push(chatRef);

        onValue(chatRef, (chatSnapshot) => {
          chatsFoundCount++;

          const data = chatSnapshot.val();

          if (data) {
            data.key = chatSnapshot.key;

            data.users.forEach((userId) => {
              if (storedUsers[userId]) return;

              const userRef = child(dbRef, `users/${userId}`);

              get(userRef).then((userSnapshot) => {
                const userSnapshotData = userSnapshot.val();
                dispatch(setStoredUsers({ newUsers: { userSnapshotData } }));
              });

              refs.push(userRef);
            });

            chatsData[chatSnapshot.key] = data;
          }

          if (chatsFoundCount >= chatIds.length) {
            dispatch(setChatsData({ chatsData }));
            setIsLoading(false);
          }
        });

        const messagesRef = child(dbRef, `messages/${chatId}`);
        refs.push(messagesRef);

        onValue(messagesRef, (messagesSnapshot) => {
          const messagesData = messagesSnapshot.val();
          dispatch(setChatMessages({ chatId, messagesData }));
        });

        if (chatsFoundCount == 0) {
          setIsLoading(false);
        }
      }
    });

    return () => {
      console.log("Unsubscribing firebase listeners");
      refs.forEach((ref) => off(ref));
    };
  }, []);

  if (isLoading) {
    <View style={commonStyles.center}>
      <ActivityIndicator size={"large"} color={colors.primary} />
    </View>;
  }

  return <StackNavigator />;
};

export default DashBoardNavigator;
