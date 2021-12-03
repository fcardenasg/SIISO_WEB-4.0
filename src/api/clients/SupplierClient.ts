import { AxiosResponse, AxiosInstance } from "axios";
import { SupplierForm } from "../../modules/Supplier/Supplier";
import { Supplier } from "../../types/SupplierTypes";
import productIntance from "../instances/productInstance";

import { postData, getData } from '../instances/utilInstance';
import { Url } from '../instances/routerInstances/AuthRoute';

export interface SupplierClient {
    saveSupplier: (data: SupplierForm) => Promise<AxiosResponse<Supplier>>
}

function buildSupplierClient(httpInstance: AxiosInstance = productIntance): SupplierClient {
    return {
        saveSupplier: (data) => httpInstance.post<Supplier>(Url.Proveedor, data),
    }
}

export const SaveSupplier = async (proveedor: SupplierForm) => await postData(Url.Proveedor, proveedor);
export const GetAllSupplier = async (page: number, pageSize: number) => await getData(Url.Proveedor, { page, pageSize });

export default buildSupplierClient;