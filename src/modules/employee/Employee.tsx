import { Step, StepLabel, Stepper } from "@material-ui/core";
import React, { createContext } from "react";
import StepperOptions from "../../types/StepperOptions";
import AccessAuth from "./components/ContractualInformation";
import ContractualInformation from "./components/ContractualInformation";
import Socialsecurity from "./components/Socialsecurity";
import Demographicinformation from "./components/Demographicinformation";
import PersonalInformation from "./components/PersonalInformation";
import Success from "./components/Success";
import icono from "../../assets/img/icono.png";
import { Cancel } from "@mui/icons-material";
import colors from "../../styles/colors";
import {
  SocialsecurityForm,
  ContractualInformationForm,
  DemographicinformationForm,
  PersonalInformationForm,
  employeeForm,
  SiteForm,
} from "../../types/employeeTypes";
import { useHistory } from "react-router";

const steppers: StepperOptions[] = [
  {
    item: 0,
    label: "Datos Personales",
    completed: false,
    component: <PersonalInformation />,
  },
  {
    item: 2,
    label: "Información seguridad social",
    completed: false,
    component: <Socialsecurity />,
  },
  {
    item: 3,
    label: "Información demográfica",
    completed: false,
    component: <Demographicinformation />,
  },
  {
    item: 4,
    label: "Información contractual",
    completed: false,
    component: <ContractualInformation />,
  },
];

interface employeeContextInterface {
  updatePersonalInformationForm: (data: PersonalInformationForm) => void;
  updateContractualInformationForm: (data: ContractualInformationForm) => void;
  updateSocialsecurityForm: (data: SocialsecurityForm) => void;
  updateDemographicinformationForm: (data: DemographicinformationForm) => void;
  updateSiteForm: (data: SiteForm) => void;
  onBack: () => void;
}

export const employeeContext =
  createContext<employeeContextInterface>({
    updatePersonalInformationForm: () => {},
    updateContractualInformationForm: () => {},
    updateSocialsecurityForm: () => {},
    updateDemographicinformationForm: () => {},
    updateSiteForm: () => {},
    onBack: () => {},
  });

const Employee = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [employeeForm, setemployeeForm] =
    React.useState<employeeForm>({} as employeeForm);
  const history = useHistory();

  const ShowCompoent = () => {
    switch (activeStep) {
      case 0:
        return steppers[0].component;
      case 1:
        return steppers[1].component;
      case 2:
        return steppers[2].component;
      case 3:
        return steppers[3].component;

      default:
        return <Success />;
    }
  };

  const onNext = () => setActiveStep((prevState) => prevState + 1);

  const onBack = () => setActiveStep((prevState) => prevState - 1);

  const updatePersonalInformationForm = (data: PersonalInformationForm) => {
    setemployeeForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

   const updateContractualInformationForm = (data: ContractualInformationForm) => {
    setemployeeForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

  const updateSocialsecurityForm = (data: SocialsecurityForm) => {
    setemployeeForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

  const updateDemographicinformationForm = (data: DemographicinformationForm) => {
    setemployeeForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

 

  const updateSiteForm = (data: SiteForm) => {
    setemployeeForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

  return (
    <employeeContext.Provider
      value={{
        updatePersonalInformationForm,
        updateContractualInformationForm,
        updateSocialsecurityForm,   
        updateDemographicinformationForm,
        updateSiteForm,
        onBack,
      }}
    >
      <div className="flex flex-col">
        <div className="bg-white py-5 px-20 flex flex-row justify-around items-center w-full">
          <img src={icono} alt="" className="h-12 w-12" />
          <Stepper activeStep={activeStep} alternativeLabel className="flex-1">
            {steppers.map((step, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step key={step.item} {...stepProps}>
                  <StepLabel {...labelProps}>
                    <span className="font-montserrat text-xs">
                      {step.label}
                    </span>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <button onClick={() => history.push('/login')}>
            <Cancel
              sx={{ color: colors.primary, fontWeight: "bold", fontSize: 40 }}
            />
          </button>
        </div>

        <div className="p-10 flex items-center w-full flex-col">
          {ShowCompoent()}
        </div>
      </div>
    </employeeContext.Provider>
  );
};

export default Employee;
