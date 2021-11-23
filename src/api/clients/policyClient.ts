import { AxiosResponse, AxiosInstance } from "axios";
import { PolicyForm } from "../../modules/Policy/Policy";
import { Policy } from "../../types/PolicyTypes";
import productIntance from "../instances/productInstance";

export interface PolicyClient {
    savePolicy: (data: PolicyForm) => Promise<AxiosResponse<Policy>>
}

function buildPolicyClient(httpInstance: AxiosInstance = productIntance): PolicyClient {
    return {
        savePolicy: (data) => httpInstance.post<Policy>('/api/Poliza', data),
    }
}

export default buildPolicyClient;
