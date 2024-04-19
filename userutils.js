import axios from "axios";

export async function fetchUserData(token) {
  try {
    // Make a request to your server to fetch user data using the token
    const response = await axios.get(
      "http://localhost:8800/api/auth/fetchUser",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    // Assuming the response contains user data
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
