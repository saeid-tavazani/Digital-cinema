"use client";
import { createContext, useContext, type ReactNode } from "react";
import setCookie from "@/hooks/setCookie";
type UserType = {
  id: number;
  name: string;
  image: string;
  email: string;
};

type UserContextValue = {
  logInUser: (userData: UserType) => void;
  logOutUser: () => void;
  userInfo: UserType | null;
};

const UserContext = createContext<UserContextValue | null>(null);

export const useUserContext = () => {
  const userCtx = useContext(UserContext);
  if (userCtx === null) {
    throw new Error("userContext is null");
  }
  return userCtx;
};

type UserContextProviderProp = {
  children: ReactNode;
};

const UserContextProvider = ({ children }: UserContextProviderProp) => {
  const [user, setUser] = setCookie<UserType | null>("userInfo", null, 7);
  const ContextValue: UserContextValue = {
    logInUser(userData) {
      setUser(userData);
    },
    logOutUser() {
      setUser(null);
    },
    userInfo: user,
  };

  return (
    <UserContext.Provider value={ContextValue}>{children}</UserContext.Provider>
  );
};
export default UserContextProvider;
