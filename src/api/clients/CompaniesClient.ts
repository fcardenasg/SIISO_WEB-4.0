import { AxiosResponse, AxiosInstance } from "axios";
import { CompaniesForm } from "../../modules/Companies/Companies";
import { Companies } from "../../types/CompaniesTypes";
import productIntance from "../instances/productInstance";

import { postData, getData } from '../instances/utilInstance';
import { Url } from '../instances/routerInstances/AuthRoute';

export interface CompaniesClient {
    saveCompanies: (data: CompaniesForm) => Promise<AxiosResponse<Companies>>
}

function buildCompaniesClient(httpInstance: AxiosInstance = productIntance): CompaniesClient {
    return {
        saveCompanies: (data) => httpInstance.post<Companies>(Url.Empresa, data),
    }
}

export const SaveCompanies = async (empresa: CompaniesForm) => await postData(Url.Empresa, empresa);
export const GetAllCompanies = async (page: number, pageSize: number) => await getData(Url.Empresa, { page, pageSize });

export default buildCompaniesClient;