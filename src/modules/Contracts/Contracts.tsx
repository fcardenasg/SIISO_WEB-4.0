import { Step, StepLabel, Stepper } from "@material-ui/core";
import React, { createContext } from "react";
import StepperOptions from "../../types/StepperOptions";
import Costs from "./components/Costs";
import Bidding from "./components/Bidding";
import PersonalInformation from "./components/PersonalInformation";
import Success from "./components/Success";
import icono from "../../assets/img/icono.png";
import { Cancel } from "@mui/icons-material";
import colors from "../../styles/colors";
import {
  PersonalInformationForm,
  BiddingForm,
  CostsForm,
  ContractsForm,
  SiteForm,
} from "../../types/ContractsTypes";
import { useHistory } from "react-router";

const steppers: StepperOptions[] = [
  {
    item: 0,
    label: "Contratos",
    completed: false,
    component: <PersonalInformation/>,
  },
  {
    item: 1,
    label: "Licitación",
    completed: false,
    component: <Bidding/>,
  },
  {
    item: 2,
    label: "Costos",
    completed: false,
    component: <Costs/>,
  },
 
];

interface ContractsContextInterface {
  updatePersonalInformationForm: (data: PersonalInformationForm) => void;
  updateBiddingForm: (data: BiddingForm) => void;
  updateCostsForm: (data: CostsForm) => void;
  updateSiteForm: (data: SiteForm) => void;
  onBack: () => void;
}

export const ContractsContext =
  createContext<ContractsContextInterface>({
    updatePersonalInformationForm: () => {},
    updateBiddingForm: () => {},
    updateCostsForm: () => {},
    updateSiteForm: () => {},
    onBack: () => {},
  });

const Contracts = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [ContractsForm, setContractsForm] =
    React.useState<ContractsForm>({} as ContractsForm);
  const history = useHistory();

  const ShowCompoent = () => {
    switch (activeStep) {
      case 0:
        return steppers[0].component;
      case 1:
        return steppers[1].component;
      case 2:
        return steppers[2].component;
      default:
        return <Success />;
    }
  };

  const onNext = () => setActiveStep((prevState) => prevState + 1);

  const onBack = () => setActiveStep((prevState) => prevState - 1);

  const updatePersonalInformationForm = (data: PersonalInformationForm) => {
    setContractsForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

  const updateBiddingForm = (data: BiddingForm) => {
    setContractsForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

 
  const updateCostsForm = (data: CostsForm) => {
    setContractsForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

 
  const updateSiteForm = (data: SiteForm) => {
    setContractsForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

  return (
    <ContractsContext.Provider
      value={{
        updatePersonalInformationForm,
        updateBiddingForm, 
        updateCostsForm,
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
          <button onClick={() => history.push('/Contracts')}>
            <Cancel
              sx={{ color: colors.primary, fontWeight: "bold", fontSize: 40 }}
            />
          </button>
        </div>

        <div className="p-1 flex xl:grid items-center w-full flex-col text-xl">
          {ShowCompoent()}
        </div>
      </div>
    </ContractsContext.Provider>
  );
};

export default Contracts;