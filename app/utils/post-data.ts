export const postData = async (data: any, route: string) => {
  try {
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    // Data posted successfully
  } catch (error) {
    // Error occurred while posting data
  }
};
