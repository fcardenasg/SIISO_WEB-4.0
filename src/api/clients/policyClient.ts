import { AxiosResponse, AxiosInstance } from "axios";
import { PolicyForm } from "../../modules/Policy/Policy";
import { Policy } from "../../types/PolicyTypes";
import productIntance from "../instances/productInstance";


import {postData, getData} from '../instances/utilInstance';
import {Url} from '../instances/routerInstances/AuthRoute';

export interface PolicyClient {
    savePolicy: (data: PolicyForm) => Promise<AxiosResponse<Policy>>
}

function buildPolicyClient(httpInstance: AxiosInstance = productIntance): PolicyClient {
    return {
        savePolicy: (data) => httpInstance.post<Policy>('/api/Poliza', data),
    }
}

export const SavePolicy = async(poliza: PolicyForm) => await postData(Url.Poliza, poliza);
export const GetAllPolicy = async(page: number, pageSize: number) => await getData(Url.Poliza, {page, pageSize});
// function GetAllPolicy(page: number, pageSize: number): PolicyClient {
//     return {
//         savePolicy: (data) => httpInstance.post<Policy>('/api/Poliza', data),
//     }
// }

export default buildPolicyClient;
