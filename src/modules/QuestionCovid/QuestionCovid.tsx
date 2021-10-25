import { Step, StepLabel, Stepper } from "@material-ui/core";
import React, { createContext } from "react";
import StepperOptions from "../../types/StepperOptions";
import AccessAuth from "./components/AccessAuth";
import CloseContact from "./components/CloseContact";
import HealthDeclaration from "./components/HealthDeclaration";
import PersonalInformation from "./components/PersonalInformation";
import Success from "./components/Success";
import icono from "../../assets/img/icono.png";
import { Cancel } from "@mui/icons-material";
import colors from "../../styles/colors";
import {
  CloseContactForm,
  CurrentSymptomsForm,
  HealthDeclarationForm,
  PersonalInformationForm,
  QuestionCovidForm,
  SiteForm,
} from "../../types/QuestionCovidTypes";
import { useHistory } from "react-router";

const steppers: StepperOptions[] = [
  {
    item: 0,
    label: "Datos Personales",
    completed: false,
    component: <PersonalInformation />,
  },
  {
    item: 1,
    label: "Declaración de salud",
    completed: false,
    component: <HealthDeclaration />,
  },
  {
    item: 2,
    label: "Contacto Estrecho",
    completed: false,
    component: <CloseContact />,
  },
  {
    item: 3,
    label: "Autorización de ingreso",
    completed: false,
    component: <AccessAuth />,
  },
];

interface QuestionCovidContextInterface {
  updatePersonalInformationForm: (data: PersonalInformationForm) => void;
  updateCloseContactForm: (data: CloseContactForm) => void;
  updateCurrentSymptomsForm: (data: CurrentSymptomsForm) => void;
  updateHealthDeclarationForm: (data: HealthDeclarationForm) => void;
  updateSiteForm: (data: SiteForm) => void;
  onBack: () => void;
}

export const QuestionCovidContext =
  createContext<QuestionCovidContextInterface>({
    updatePersonalInformationForm: () => {},
    updateCloseContactForm: () => {},
    updateCurrentSymptomsForm: () => {},
    updateHealthDeclarationForm: () => {},
    updateSiteForm: () => {},
    onBack: () => {},
  });

const QuestionCovid = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [questionCovidForm, setQuestionCovidForm] =
    React.useState<QuestionCovidForm>({} as QuestionCovidForm);
  const history = useHistory();

  const ShowCompoent = () => {
    switch (activeStep) {
      case 0:
        return steppers[3].component;
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
    setQuestionCovidForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

   const updateHealthDeclarationForm = (data: HealthDeclarationForm) => {
    setQuestionCovidForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

  const updateCloseContactForm = (data: CloseContactForm) => {
    setQuestionCovidForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

  const updateCurrentSymptomsForm = (data: CurrentSymptomsForm) => {
    setQuestionCovidForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

 

  const updateSiteForm = (data: SiteForm) => {
    setQuestionCovidForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

  return (
    <QuestionCovidContext.Provider
      value={{
        updateCloseContactForm,
        updateCurrentSymptomsForm,
        updatePersonalInformationForm,
        updateHealthDeclarationForm,
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
    </QuestionCovidContext.Provider>
  );
};

export default QuestionCovid;
