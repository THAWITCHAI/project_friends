const getTypeTravels = async () => {
  try {
    const response = await fetch("/api/type_travels");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
};

const getTravels = async () => {
  const res = await fetch("/api/travel");
  if (res.ok) {
    const resp = await res.json();
    return resp;
  }
  return;
};

const getCafe = async () => {
  const res = await fetch("/api/restaurant");
  if (res.ok) {
    const resp = await res.json();
    return resp;
  }
  return;
};

const travelModule = {
  getTypeTravels,
  getTravels,
  getCafe,
};

export default travelModule;
