import { AxiosResponse } from "axios";
import { LoginForm } from "../../types/LoginForm";
import { User } from "../../types/User";
import productIntance from "../instances/productInstance";

const tokenKey = 'token';
export const getToken = () => localStorage.getItem(tokenKey);

interface AuthClient {
  login: (loginData: LoginForm) => Promise<AxiosResponse<User>>
}

function buildAuthClient(httpInstance = productIntance): AuthClient {
  return {
    login: (loginData) => httpInstance.post<User>('', loginData),
  }
}

export default buildAuthClient; 