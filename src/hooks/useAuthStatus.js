import { useEffect, useState, useRef } from "react";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) {
      // Simulate an API call to check if the user is logged in
      setTimeout(() => {
        setLoggedIn(true);
        setCheckingStatus(false);
      }, 1000);
    }
    return () => {
        isMounted.current = false
    }
  }, [isMounted]);

  return { loggedIn, checkingStatus };
};
