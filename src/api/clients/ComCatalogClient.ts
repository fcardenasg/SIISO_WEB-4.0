import { AxiosResponse, AxiosInstance } from "axios";
import { ComCatalogForm } from "../../modules/Contracts/Catalog/ComCatalog";
import { ComCatalog } from "../../types/ComCatalogTypes";
import productIntance from "../instances/productInstance";


import {postData, getData} from '../instances/utilInstance';
import {Url} from '../instances/routerInstances/AuthRoute';

export interface ComCatalogClient {
    SaveComCatalog: (data: ComCatalogForm) => Promise<AxiosResponse<ComCatalog>>
}

function buildComCatalogClient(httpInstance: AxiosInstance = productIntance): ComCatalogClient {
    return {
        SaveComCatalog: (data) => httpInstance.post<ComCatalog>('/api/ComCatalogo', data),
    }
}

export const SaveComCatalog = async(comCatalogo: ComCatalogForm) => await postData(Url.ComCatalogo, comCatalogo);
export const GetAllComCatalog = async(page: number, pageSize: number) => await getData(Url.ComCatalogo, {page, pageSize});



export default buildComCatalogClient;