import { AxiosResponse, AxiosInstance } from "axios";
/* import { ComContractsForm } from "../../../modules/Contracts/Contracts"; */
import { ContractsForm } from "../../types/ContractsTypes";
import productIntance from "../instances/productInstance";

import {postData, getData} from '../instances/utilInstance';
import {Url} from '../instances/routerInstances/AuthRoute';

export interface ContractsClient {
    SaveContracts: (data: ContractsForm) => Promise<AxiosResponse<ContractsForm>>
}

function buildContractsClient(httpInstance: AxiosInstance = productIntance): ContractsClient {
    return {
        SaveContracts: (data) => httpInstance.post<ContractsForm>('/api/Contracts', data),
    }
}

/* export const SaveComContracts = async(comContracts: ComContractsForm) => await postData(Url.Contrato, contrato); */
export const GetAllContracts = async(page: number, pageSize: number) => await getData(Url.Contrato, {page, pageSize});

export default buildContractsClient;