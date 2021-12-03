import { AxiosResponse, AxiosInstance } from "axios";
import { CatalogForm } from "../../modules/Catalog/Catalog";
import { Catalog } from "../../types/CatalogTypes";
import productIntance from "../instances/productInstance";

import { postData, getData } from '../instances/utilInstance';
import { Url } from '../instances/routerInstances/AuthRoute';

export interface CatalogClient {
    saveCatalog: (data: CatalogForm) => Promise<AxiosResponse<Catalog>>,
    DeleteCatalog: (idCatalogo: number) => Promise<AxiosResponse>,
}

function buildCatalogClient(httpInstance: AxiosInstance = productIntance): CatalogClient {
    return {
        saveCatalog: (data) => httpInstance.post<Catalog>(Url.Catalogo, data),
        DeleteCatalog: (idCatalogo) => httpInstance.delete(Url.Catalogo, { params: { idCatalogo }})
    }
}

export const SaveCatalog = async (catalogo: CatalogForm) => await postData(Url.Catalogo, catalogo);
export const GetAllCatalog = async (page: number, pageSize: number) => await getData(Url.Catalogo, { page, pageSize });

export default buildCatalogClient;