import { useContext } from "react";
import authContext from "../providers/authContext";


const useAuth = () => useContext(authContext);

export default useAuth;
