import { AxiosResponse, AxiosInstance } from "axios";
import { TypeofcatalogsForm } from "../../modules/Typeofcatalogs/Typeofcatalogs";
import { Typeofcatalog } from "../../types/TypeofcatalogsType";
import productIntance from "../instances/productInstance";


import { postData, getData } from '../instances/utilInstance';
import { Url } from '../instances/routerInstances/AuthRoute';

export interface TypeofcatalogClient {
    saveTypeofcatalog: (data: TypeofcatalogsForm) => Promise<AxiosResponse<Typeofcatalog>>,
    DeleteTypeofcatalog: (idTipoCatalogo: number) => Promise<AxiosResponse>,
    FilterTypeofcatalog: (dataFilter: string, page: number, pageSize: number) => Promise<AxiosResponse>
    
}

function buildTypeofcatalogClient(httpInstance: AxiosInstance = productIntance): TypeofcatalogClient {
    return {
        saveTypeofcatalog: (data) => httpInstance.post<Typeofcatalog>(Url.TipoCatalogo, data),
        DeleteTypeofcatalog: (idTipoCatalogo) => httpInstance.delete(Url.TipoCatalogo, { params: { idTipoCatalogo }}),
        FilterTypeofcatalog: (dataFilter: string, page: number, pageSize: number) => httpInstance.get(Url.FilterTipoCatalogo, { params: { dataFilter,page,pageSize }}),
    }
}

export const SaveTypeCatalog = async (tipoCatalogo: TypeofcatalogsForm) => await postData(Url.TipoCatalogo, tipoCatalogo);
export const GetAllTipoCatalogo = async (page: number, pageSize: number) => await getData(Url.TipoCatalogo, { page, pageSize });

export default buildTypeofcatalogClient;