import { createSlice } from "@reduxjs/toolkit";

const calendarActivitiesSlice = createSlice({
  name: "activities",
  initialState: {
    calendarActivitiesData: {},
  },
  reducers: {
    setCalendarActivitiesData: (state, action) => {
      const existingCalendarActivities = state.calendarActivitiesData;

      const { calendarId, calendarActivitiesData } = action.payload;

      existingCalendarActivities[calendarId] = calendarActivitiesData;

      state.calendarActivitiesData = existingCalendarActivities;
    },
  },
});
export const { setCalendarActivitiesData } = calendarActivitiesSlice.actions;
export default calendarActivitiesSlice.reducer;
