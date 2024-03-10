import axios from "axios";
import { rapidApiKey } from "../../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
  console.log(`url ${url} params ${params}`);
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios(options);
    return response.data;
  } catch (err) {
    console.log("error: ", err.message);
    throw err; // Re-throw the error to handle it outside of this function
  }
};

export const fetchExercisesByBodypart = async (bodyPart) => {
  try {
    const data = await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`);
    return data;
  } catch (error) {
    // Handle the error or log it
    console.error("Failed to fetch exercises:", error.message);
    // throw error; // Re-throw the error if needed
  }
};
