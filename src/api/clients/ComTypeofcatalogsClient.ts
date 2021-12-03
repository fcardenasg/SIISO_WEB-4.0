import { AxiosResponse, AxiosInstance } from "axios";
import { ComTypeofcatalogsForm } from "../../modules/Contracts/Typeofcatalogs/ComTypeofcatalogs";
import { ComTypeofcatalog } from "../../types/ComTypeofcatalogsType";
import productIntance from "../instances/productInstance";

import {postData, getData} from '../instances/utilInstance';
import { Url } from '../instances/routerInstances/AuthRoute';

export interface ComTypeofcatalogsClient {
    SaveComTypeofcatalogs: (data: ComTypeofcatalogsForm) => Promise<AxiosResponse<ComTypeofcatalog>>,
    DeleteComTypeofcatalog: (idTipoCatalogo: number) => Promise<AxiosResponse>,
}

function buildComTypeofcatalogsClient(httpInstance: AxiosInstance = productIntance): ComTypeofcatalogsClient {
    return {
        SaveComTypeofcatalogs: (data) => httpInstance.post<ComTypeofcatalog>(Url.ComTipoCatalogo, data),
        DeleteComTypeofcatalog: (idTipoCatalogo) => httpInstance.delete(Url.ComTipoCatalogo, { params: { idTipoCatalogo }})
    }
}

export const SaveComTypeofcatalogs = async(comTipoCatalogo: ComTypeofcatalogsForm) => await postData(Url.ComTipoCatalogo,  comTipoCatalogo );
export const GetAllComTypeofcatalogs = async(page: number, pageSize: number) => await getData(Url.ComTipoCatalogo,  {page, pageSize} );

export default buildComTypeofcatalogsClient;