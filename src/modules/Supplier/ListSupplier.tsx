import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { ButtonOutline } from '../../components/buttons/ButtonOutline';
import { ButtonPrimary } from '../../components/buttons/ButtonPrimary';
import { InputText } from '../../components/input/InputText';
import { Supplier } from '../../types/SupplierTypes';
import MoreVertIcon from "@mui/icons-material/MoreVert";

const listSupplier: Supplier[] = [
    {
        CodiProv: 3,
        NombProv: 'Francisco Cardenas',
        TeleProv: '3145202614',
        EmaiProv: 'fcardenas@gmail.com',
        ContaProv: 'test',
        CiudProv: 'test',
        TipoProv: 'test',
        DireProv: 'test',
        Imagen: 'http://3.bp.blogspot.com/_EZ16vWYvHHg/TUd1QWxMUoI/AAAAAAAAWjk/5ktGHl-18FU/s1600/www.BANCODEIMAGENESGRATUITAS.com%2B-%2Bbeautiful-mountain-waterfall.jpg'
    },
    {
        CodiProv: 3,
        NombProv: 'Jorge Rivera',
        TeleProv: '3153290495',
        EmaiProv: 'jrivera@drummondltd.com',
        ContaProv: 'testdddd',
        CiudProv: 'testddd',
        TipoProv: 'testddd',
        DireProv: 'testdddddd',
        Imagen: 'http://3.bp.blogspot.com/_EZ16vWYvHHg/TUd1QWxMUoI/AAAAAAAAWjk/5ktGHl-18FU/s1600/www.BANCODEIMAGENESGRATUITAS.com%2B-%2Bbeautiful-mountain-waterfall.jpg'
    }
]

const ListSupplier = () => {
    const {
        control,
        formState: { errors },
    } = useForm();

    const history = useHistory();
    return (
        <div>
            <div className="p-1">
                <div className="w-full bg-blue-500 shadow rounded p-5 text-sm text-white font-montserrat font-semibold">
                    Lista de Proveedores
                </div>
                <div className="h-5"></div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                    <InputText
                        control={control}
                        name="busqueda"
                        errorMessage={errors?.busqueda?.message}
                        label="Búsqueda"
                        defaultValue=""
                    />
                    <div className="grid grid-cols-2 gap-2">
                        <ButtonPrimary onPress={() => history.push('/addSupplier')} text="Nuevo" />
                        <ButtonOutline onPress={() => history.push('/parameterization')} text="Cerrar" />
                    </div>
                </div>
            </div>

            {
                listSupplier.map((supplier) => (
                    <div className="items-center p-4 gap-4 flex-1 grid grid-cols-5 bg-white rounded shadow-md my-3 gap-x-6 gap-y-3 text-gray-700 text-sm font-montserrat">

                        <div className="bg-red-1 h-10 w-10 text-white text-center 
                        font-extrabold flex items-center justify-center rounded-full">{supplier.NombProv[0]}</div>

                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400">Nombre: </span>
                            <strong>{supplier.NombProv}</strong>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400">Teléfono:</span>
                            <strong>{supplier.TeleProv}</strong>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400">Correo: </span>
                            <strong>{supplier.EmaiProv}</strong>
                        </div>

                        <div className="flex">
                            <MoreVertIcon />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListSupplier