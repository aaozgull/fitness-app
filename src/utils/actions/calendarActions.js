import { child, getDatabase, push, ref, update } from "firebase/database";
import { getFirebaseApp } from "../firebaseHelper";
import { useDispatch } from "react-redux";
import { startOfMonth, eachDayOfInterval, addMonths } from "date-fns";

//import { getFormattedDate } from "../date";
import { setCalendarData } from "../../store/calendarSlice";

export const createCalendar = async (loggedInUserId) => {
  const dispatch = useDispatch();
  const app = getFirebaseApp();
  const dbRef = ref(getDatabase(app));

  const daysInMonth = generateDatesForThreeMonths();
  for (const day of daysInMonth) {
    //const newday = getFormattedDate(day);
    const newCalendarData = {
      date: day.toISOString(),
      createdBy: loggedInUserId,
      createdAt: new Date().toISOString(),
    };

    const newCalendar = await push(child(dbRef, "calendar"), newCalendarData);
    await push(child(dbRef, `userCalendar/${loggedInUserId}`), newCalendar.key);

    dispatch(
      setCalendarData({
        Key: newCalendar.key,
        calendarData: newCalendarData,
      })
    );
  }
};

const generateDatesForThreeMonths = () => {
  const currentDate = new Date();
  currentDate.setHours(0); // Set hours to 0 (midnight)
  currentDate.setMinutes(0); // Set minutes to 0
  currentDate.setSeconds(0); // Set seconds to 0
  currentDate.setMilliseconds(0);
  const dates = [];

  for (let i = 0; i <= 3; i++) {
    const currentMonth = addMonths(currentDate, i);
    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0),
    });
    for (const day of daysInMonth) {
      if (i < 3) {
        if (day >= currentDate) {
          dates.push(day);
        }
      } else {
        if (day.getDate() <= currentDate.getDate()) {
          dates.push(day);
        }
      }
    }
  }
  return dates;
};

const addActivitiesData = async (
  CalendarId,
  loggedInUserId,
  calendarItemData
) => {
  const app = getFirebaseApp();
  const dbRef = ref(getDatabase());
  const activitiesRef = child(dbRef, `activities/${CalendarId}`);

  const CalendarItemData = {
    setBy: loggedInUserId,
    setAt: new Date().toISOString(),
    ...calendarItemData, ///// there may be different activities. Need to be change this
  };

  await push(activitiesRef, CalendarItemData);
};

export const updateActivitiesData = async (
  calendarItemId,
  userId,
  calendarItemData
) => {
  const app = getFirebaseApp();
  const dbRef = ref(getDatabase(app));
  const calendarItemRef = child(dbRef, `activities/${calendarItemId}`);

  await update(calendarItemRef, {
    ...calendarItemData,
    updatedAt: new Date().toISOString(),
    updatedBy: userId,
  });
};
