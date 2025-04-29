const isDev = import.meta.env.DEV;

const apiService = {
  get: async function (url) {
    if (isDev) console.log("GET request to:", url);

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
      if (isDev) console.log("Response JSON:", data);
      return data;
    } catch (error) {
      if (isDev) console.error("API GET error:", error);
      throw error;
    }
  },

  post: async function (url, body) {
    if (isDev) console.log("POST request to:", url, "with body:", body);

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
      if (isDev) console.log("Response JSON:", data);
      return data;
    } catch (error) {
      if (isDev) console.error("API POST error:", error);
      throw error;
    }
  },

  postWithoutToken: async function (url, body) {
    if (isDev) console.log("POST without token to:", url, "with body:", body);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (isDev) {
          if (!response.ok) {
            console.log("Error response JSON:", data);
          } else {
            console.log("Response JSON:", data);
          }
        }
        return data;
      }

      if (!response.ok) {
        const textResponse = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Response: ${textResponse}`
        );
      }

      return await response.text();
    } catch (error) {
      if (isDev) console.error("API POST without token error:", error);
      throw error;
    }
  },
};

export default apiService;
