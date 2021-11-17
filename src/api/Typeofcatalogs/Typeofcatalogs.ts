import { postData, getData, putData, deleteData } from '../instances/utilInstance';
import { Url } from '../instances/routerInstances/AuthRoute';
import { Typeofcatalog } from "../../types/TypeofcatalogsType";


// export const GetByIdTipoCatalogo = async(idTipoCatalogo: Typeofcatalog.idTipoCatalogo) => await getData(Url.TipoCatalogoId, { idTipoCatalogo });
// export const GetAllTipoCatalogo = async(page, pageSize) => await getData(Url.TipoCatalogo, { page, pageSize });
// export const InsertTipoCatalogo = async(tipoCatalogo) => await postData(Url.TipoCatalogo, tipoCatalogo);
// export const UpdateTipoCatalogo = async(tipoCatalogo) => await putData(Url.TipoCatalogo, tipoCatalogo);
// export const DeleteTipoCatalogo = async(idTipoCatalogo) => await deleteData(Url.TipoCatalogo, { idTipoCatalogo });