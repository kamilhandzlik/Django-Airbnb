const apiService = {
  get: async function (url) {
    console.log("GET request to:", url);
    console.log("VITE_API_HOST loaded:", import.meta.env.VITE_API_HOST);
    console.log("czy w ogóle widać coś z VITE_.", import.meta.env);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response JSON:", data);
      return data;
    } catch (error) {
      console.error("API GET error:", error);
      throw error;
    }
  },

  post: async function (url, body) {
    console.log("POST request to:", url, "with body:", body);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response JSON:", data);
      return data;
    } catch (error) {
      console.error("API POST error:", error);
      throw error;
    }
  },
};

export default apiService;
