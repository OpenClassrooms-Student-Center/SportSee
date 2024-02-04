const BASE_URL = "http://localhost:3000/user/";

const apiService = {
  getUsersDatas: async (REACT_APP_USER_ID) => {
    try {
      const response = await fetch(`${BASE_URL}${REACT_APP_USER_ID}`);
      if (!response.ok) {
        throw new Error(
          "Erreur lors de la récupération des données de l'utilisateur"
        );
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  getUsersPerformances: async (REACT_APP_USER_ID) => {
    try {
      const response = await fetch(
        `${BASE_URL}${REACT_APP_USER_ID}/performance`
      );
      if (!response.ok) {
        throw new Error(
          "Erreur lors de la récupération des données de la performance de l'utilisateur"
        );
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  getUsersAverages: async (REACT_APP_USER_ID) => {
    try {
      const response = await fetch(
        `${BASE_URL}${REACT_APP_USER_ID}/average-sessions`
      );
      if (!response.ok) {
        throw new Error(
          "Erreur lors de la récupération de la moyenne des sessions de l'utilisateur"
        );
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  getUsersActivity: async (REACT_APP_USER_ID) => {
    try {
      const response = await fetch(`${BASE_URL}${REACT_APP_USER_ID}/activity`);
      if (!response.ok) {
        throw new Error(
          "Erreur lors de la récupération de l'activité de l'utilisateur"
        );
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};

export default apiService;
