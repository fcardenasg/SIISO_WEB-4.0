import { AxiosResponse, AxiosInstance } from "axios";
import { TypeofcatalogsForm } from "../../modules/Typeofcatalogs/Typeofcatalogs";
import { Typeofcatalog } from "../../types/TypeofcatalogsType";
import productIntance from "../instances/productInstance";


import {postData, getData} from '../instances/utilInstance';
import {Url} from '../instances/routerInstances/AuthRoute';

export interface TypeofcatalogClient {
    saveTypeofcatalog: (data: TypeofcatalogsForm) => Promise<AxiosResponse<Typeofcatalog>>
}

function buildTypeofcatalogClient(httpInstance: AxiosInstance = productIntance): TypeofcatalogClient {
    return {
        saveTypeofcatalog: (data) => httpInstance.post<Typeofcatalog>(Url.TipoCatalogo, data),
    }
}

export const SaveTypeCatalog = async(tipoCatalogo: TypeofcatalogsForm) => await postData(Url.TipoCatalogo,  tipoCatalogo );
export const GetAllTipoCatalogo = async(page: number, pageSize: number) => await getData(Url.TipoCatalogo,  {page, pageSize} );

export default buildTypeofcatalogClient;