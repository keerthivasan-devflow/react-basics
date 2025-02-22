const { useState, useEffect } = require("react");

export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => setOnlineStatus(() => false));
    window.addEventListener("online", () => setOnlineStatus(() => true));
  }, []);

  return onlineStatus;
};
