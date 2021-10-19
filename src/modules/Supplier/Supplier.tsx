import React from 'react'
import { useForm } from "react-hook-form";
import { InputText } from "../../components/input/InputText";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import InputCheck from "../../components/input/InputCheck";
import InputSelect, {
  SelectOptions,
} from "../../components/input/InputSelect";
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';



// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//Cargar combos
const city: SelectOptions[] = [
  {
    value: "Valledupar",
    label: "Valledupar",
  },
  {
    value: "Barranquilla",
    label: "Barranquilla",
  },
  {
    value: "Santa Marta",
    label: "Santa Marta",
  },

];

// chip implementacion
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Cargar combo chip
const names = [
  'Audiometria',
  'Visiometria',
  'Espirometria',
  'RX Torax',
  'Laboratorios Clinicos',
  'Electrocardiogramas',
  'RX CLS',
  'RNM',
  'Resonancia Magnetica',
  'Medicamentos',
];





type SupplierForm = {
    NombProv: string;
    CodiProv: string;
    TeleProv: string;
    EmaiProv: string;
    ContaProv: string;
    CiudProv: string;
    TipoProv: string;
    DireProv: string;
    Estado : boolean;
};


//Validacion de los campos

const schemaValidation: Yup.SchemaOf<SupplierForm> = Yup.object({
        NombProv: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        CodiProv: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        TeleProv: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        EmaiProv: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        ContaProv: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        CiudProv: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        TipoProv: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        DireProv: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        Estado: Yup.boolean().required(),
});


const Supplier = () => {
    //Crear formulario para validar
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SupplierForm>({
        resolver: yupResolver(schemaValidation),
    });

    const handleClick = (data: SupplierForm) => {
        console.log(data);
    };


    function getStyles(name: string, personName: readonly string[], theme: Theme) {
      return {
        fontWeight:
          personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
      };
    }
    
    function MultipleSelectChip() {
      const theme = useTheme();
      const [personName, setPersonName] = React.useState<string[]>([]);
    
      const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    
   //mostrar en pantalla
   return (
    <div className="p-10 flex justify-center items-center">
      <div className="md:w-1/2 bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center">
          <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
            Registro de Proveedores
          </span>
        </div>
      { /* Linea roja y texto */}
      <div className="grid grid-cols-2 gap-2">
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
        
        <InputText
          control={control}
          name="Código"
          errorMessage={errors?.CodiProv?.message}
          label="Código"
          defaultValue=""
        />
        <InputText
          control={control}
          name="Nombre"
          errorMessage={errors?.NombProv?.message}
          label="Nombre"
          defaultValue=""
        />
        </div>
        <div className="border rounded border-red-200 flex flex-col px-4 pt-2">
        <InputText
          control={control}
          name="Celular"
          errorMessage={errors?.TeleProv?.message}
          label="Celular"
          defaultValue=""
        />
        <InputText
          control={control}
          name="Correo electrónico"
          errorMessage={errors?.EmaiProv?.message}
          label="Correo electrónico"
          defaultValue=""
        />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
        <InputText
          control={control}
          name="Contacto"
          errorMessage={errors?.ContaProv?.message}
          label="Contacto"
          defaultValue=""
        />
        <InputSelect
        control={control}
        name="Ciudad"
        label="Ciudad"
        defaultValue=""
        options={city}
        errorMessage={errors.CiudProv?.message}
      />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
        <InputText
          control={control}
          name="Dirección"
          errorMessage={errors?.DireProv?.message}
          label="Dirección"
          defaultValue=""
        />
       <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
     
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
    </div>

        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
        <InputCheck
        control={control}
        name="Estado"
        label="Estado"
        defaultValue={false}
        errorMessage={errors.Estado?.message}
        />
        </div>
        </div>

        <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        <div className="h-3"></div>
        <Link to="/Parameterization">
          <ButtonOutline onPress={() => {}} text="Cancelar" />
        </Link>
      </div>
      </div>
  );

}

};
export default Supplier
