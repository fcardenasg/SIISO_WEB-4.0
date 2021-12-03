import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";
import { InputText } from "../../../components/input/InputText";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputCheckBox from "../../../components/input/InputCheckBox";
import InputDate from "../../../components/input/InputDate";
import { EmployeeContext } from "../Employee";
import { GetAllCatalog } from "../../../api/clients/CatalogClient";

const Types: SelectOptions[] = [
  {
    value: "H",
    label: "H",
  },
  {
    value: "S",
    label: "S",
  },
];
const TypeContract: SelectOptions[] = [
  {
    value: "E",
    label: "Empleado",
  },
  {
    value: "C",
    label: "Contratista",
  },
  {
    value: "POI",
    label: "Aprendiz sena",
  },
  {
    value: "CWR",
    label: "Temporal",
  },
];
const RosterPosition: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const GeneralPosition: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const Department: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const Area: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const SubArea: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const Grupo: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const Turno: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const Rotation: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];

const ContractualInformation = () => {
  const CatalogoArray: SelectOptions[] = [];
  const [lsCatalogo, setLsCatalogo] = useState(CatalogoArray);

  const employeeContext = useContext(EmployeeContext);
  const { onBack } = employeeContext;
  const { handleClick } = employeeContext;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  //Cargar combo-box
  useEffect(() => {
    async function GetAll() {
      const lsCatalogoServer = await GetAllCatalog(0, 0);
      var result = lsCatalogoServer.entities.map((item: any) => ({
        value: item.idCatalogo,
        label: item.nombre
      }));
      setLsCatalogo(result);
    }
    GetAll();
  }, []);

  return (
    <div className="flex flex-col bg-white shadow px-10 py-1 rounded">
      <span className="text-gray-500 font-semibold px-3 py-2 font-montserrat text-lg text-center">
        Información contractual
      </span>
      <div className="h-5"></div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">

        <InputDate
          control={control}
          name="FechaContrato"
          label="Fecha de contrato"
          defaultValue={null}
          errorMessage={errors.FechaContrato?.message}
        />
        <InputSelect
          control={control}
          name="TipoContrato"
          label="Tipo de contrato"
          defaultValue=""
          options={lsCatalogo}
          errorMessage={errors?.TipoContrato?.message}
        />
        <InputSelect
          control={control}
          name="Type"
          label="Rol"
          defaultValue=""
          options={lsCatalogo}
          errorMessage={errors?.Type?.message}
        />
        <InputSelect
          control={control}
          name="RosterPosition"
          label="Roster Position"
          defaultValue=""
          options={lsCatalogo}
          errorMessage={errors?.RosterPosition?.message}
        />
        <InputSelect
          control={control}
          name="GeneralPosition"
          label="General Position"
          defaultValue=""
          options={lsCatalogo}
          errorMessage={errors?.GeneralPosition?.message}
        />
        <InputSelect
          control={control}
          name="Departamento"
          label="Departamentos"
          defaultValue=""
          options={Department}
          errorMessage={errors?.Departamento?.message}
        />
        <InputSelect
          control={control}
          name="Area"
          label="Areas"
          defaultValue=""
          options={lsCatalogo}
          errorMessage={errors?.Area?.message}
        />
        <InputSelect
          control={control}
          name="SubArea"
          label="Subareas"
          defaultValue=""
          options={lsCatalogo}
          errorMessage={errors?.SubArea?.message}
        />
        <InputSelect
          control={control}
          name="Grupo"
          label="Grupo"
          defaultValue=""
          options={lsCatalogo}
          errorMessage={errors?.Grupo?.message}
        />
        <InputSelect
          control={control}
          name="Turno"
          label="Turno"
          defaultValue=""
          options={lsCatalogo}
          errorMessage={errors?.Turno?.message}
        />
        <InputSelect
          control={control}
          name="Rotation"
          label="Rotación"
          defaultValue=""
          options={lsCatalogo}
          errorMessage={errors?.Rotation?.message}
        />
      </div>

      <div className="flex flex-1 flex-row justify-around mt-5 gap-2">
        <ButtonOutline onPress={onBack} text="Atrás" />
        <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
      </div>
    </div>
  );
};

export default ContractualInformation;