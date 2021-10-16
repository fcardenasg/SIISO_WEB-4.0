import { createContext } from "react";
import { UserProviderAuth } from "../customHooks/useProviderAuth";

const authContext = createContext<UserProviderAuth>({
  user: null,
  signin: () => {},
  signout: () => {}
});

export default authContext;