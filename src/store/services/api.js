export const fetchApi = async (action) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${action.payload}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
