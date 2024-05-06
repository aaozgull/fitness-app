import axios from "axios";

export const getRecipesList = async (tags = null, size) => {
  console.log(`------------------getRecipesList------ `);
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: size || "20", tags },
    headers: {
      "X-RapidAPI-Key": "23bc73e268msh9593a23f3ecfb61p1f68f3jsnc4d0e9cbddf5",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };
  return await axios.request(options);
};
