import { useState } from "react";
import { User } from "../types/User";

export interface UserProviderAuth {
  user: User | null;
  signin: (newUser: User) => void;
  signout: () => void;
}

function useProvideAuth(): UserProviderAuth {
  const [user, setUser] = useState<User | null>(null);

  const signin = (newUser: User) => {
    setUser(newUser);
  };

  const signout = () => {
    setUser(null);
  };

  return {
    user,
    signin,
    signout
  };
}

export default useProvideAuth;