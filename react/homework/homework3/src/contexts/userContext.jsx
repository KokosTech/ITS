import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserContext = createContext({});

// For auth check and user info / data

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  });

  const signUp = ({ firstName, lastName, email, password }) => {
    setUser({
      firstName,
      lastName,
      email,
      password,
    });

    localStorage.setItem(
      "user",
      JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      })
    );
  };

  const logOut = () => {
    setUser({
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    });

    localStorage.removeItem("user");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const auth = useMemo(
    () => ({
      user,
      signUp,
      logOut,
    }),
    [user]
  );

  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
export default UserProvider;
