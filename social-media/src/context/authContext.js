import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localUserStorage = JSON.parse(localStorage.getItem("user")) || null;

  const [currentUser, setCurrentUser] = useState(localUserStorage);

  const login = () => {
    // todo
    setCurrentUser({
      id: 1,
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
