import { useState } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import FormComponent from "./components/FormComponent";
import HeaderStep from "./components/HeaderStep";
import { gridf, containerCard } from "./styles/styles";
import ControllerStep from "./components/ControllerStep";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [active, setActive] = useState(1);
  const [fullName, setFullName] = useState<string>("");
  const [mailAdrress, setMailAdrress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [Portfolio, setPortfolio] = useState<string>("");
  const [succesFinal, setSuccesFinal] = useState<boolean>(false);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedTechnologie, setSelectedTechnologie] = useState("");
  const handleCheckboxChange = (value: string) => {
    setSelectedTechnologie(value === selectedTechnologie ? "" : value); 
  };

  const handleLevelSelect = (level: string) => {
    if (level !== selectedLevel) {
      setSelectedLevel(level);
      console.log("Nivel seleccionado:", level);
    }
  };

  const handleNextStep = () => {
    const stepValidations = {
      1: () => {
        if (!fullName || !mailAdrress || !phoneNumber || !Portfolio) {
          toast.error("Todos los datos personales son obligatorios");
          return false;
        }
        return true;
      },
      2: () => {
        if (!selectedLevel) {
          toast.error("Debe seleccionar un nivel");
          return false;
        }
        return true;
      },
      3: () => {
        if (!selectedTechnologie) {
          toast.error("Debe seleccionar al menos una tecnología");
          return false;
        }
        return true;
      },
    };

  
    const currentValidation =
      stepValidations[active as keyof typeof stepValidations];

    if (currentValidation && !currentValidation()) {
      return;
    }

    setActive((prevActive) => Math.min(prevActive + 1, 5));

    console.debug(`Paso cambiado a: ${Math.min(active + 1, 5)}`);
  };

  const handleGoBackStep = () => {
    setActive(active - 1);
  };

  const handleSubmit = () => {
    setActive((preactive) => {
      return preactive == 5 ? 5 : preactive + 1;
    });
    setSuccesFinal(true);
  };

  return (
    <>
      <Grid sx={{ ...gridf }}>
        <Grid size={{ sm: 5, md: 5, xs: 5 }} sx={{ ...containerCard }}>
          <HeaderStep active={active} succesFinal={succesFinal} />
          <FormComponent
            active={active}
            skillSelect={selectedLevel}
            handleLevelSelect={handleLevelSelect}
            fullName={fullName}
            email={mailAdrress}
            phoneNumber={phoneNumber}
            Portfolio={Portfolio}
            onFullNameChange={setFullName}
            onEmailChange={setMailAdrress}
            onPhoneNumberChange={setPhoneNumber}
            onPortfolioChange={setPortfolio}
            succussFinal={succesFinal}
            selectedTechnologie={selectedTechnologie}
            handleCheckboxChange={handleCheckboxChange}
          />
          <ControllerStep
            indexActive={active}
            onNext={() => handleNextStep()}
            onBack={() => handleGoBackStep()}
            onSubmit={() => handleSubmit()}
            succesFinal={succesFinal}
          />
        </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
}

export default App;
