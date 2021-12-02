import { AxiosResponse, AxiosInstance } from "axios";
import { ComSupplierForm } from "../../modules/Contracts/Supplier/ComSupplier";
import { ComSupplier } from "../../types/ComSupplierTypes";
import productIntance from "../instances/productInstance";


import {postData, getData} from '../instances/utilInstance';
import {Url} from '../instances/routerInstances/AuthRoute';

export interface ComSupplierClient {
    SaveComSupplier: (data: ComSupplierForm) => Promise<AxiosResponse<ComSupplier>>
}

function buildComSupplierClient(httpInstance: AxiosInstance = productIntance): ComSupplierClient {
    return {
        SaveComSupplier: (data) => httpInstance.post<ComSupplier>('/api/ComProveedor', data),
    }
}

export const SaveComSupplier = async(comProveedor: ComSupplierForm) => await postData(Url.ComProveedor, comProveedor);
export const GetAllComSupplier = async(page: number, pageSize: number) => await getData(Url.ComProveedor, {page, pageSize});



export default buildComSupplierClient;