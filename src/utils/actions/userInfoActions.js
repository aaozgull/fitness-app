import { child, get, getDatabase, ref } from "firebase/database";
import { getFirebaseApp } from "../firebaseHelper";

export const getUserInfoData = async (userId) => {
  try {
    const app = getFirebaseApp();
    const dbRef = ref(getDatabase(app));
    const userRef = child(dbRef, `userInfo/${userId}`);

    const snapshot = await get(userRef);
    return snapshot.val();
  } catch (error) {
    console.log(error);
  }
};

export const updateSignedInUserInfoData = async (userId, newInfoData) => {
  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `userInfo/${userId}`);
  await update(childRef, newInfoData);
};

const createUserInfo = async (
  name,
  gender,
  age,
  weight,
  height,
  goal,
  fitnessLevel,
  userId
) => {
  const userInfoData = {
    userId,
    name,
    gender,
    age,
    weight,
    height,
    goal,
    fitnessLevel,
  };

  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `userInfo/${userId}`);
  await set(childRef, userInfoData);
  return userInfoData;
};
