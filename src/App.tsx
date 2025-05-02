import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Grid } from "@mui/material";
import FormComponent from "./components/FormComponent";
import HeaderStep from "./components/HeaderStep";
import { gridf, containerCard } from "./styles/styles";
import ControllerStep from "./components/ControllerStep";

function App() {
  const [active, setActive] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const handleLevelSelect = (level: string) => {
    if (level !== selectedLevel) {
      setSelectedLevel(level);
      console.log("Nivel seleccionado:", level);
    }
  };

  const handleNextStep = () => {
    setActive((preactive) => {
      return preactive == 4 ? 4 : preactive + 1;
    });
  };

  const handleGoBackStep = () => {
    setActive(active - 1);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <Grid sx={{ ...gridf }}>
      <Grid size={{ sm: 5, md: 5, xs: 5 }} sx={{ ...containerCard }}>
        <HeaderStep active={active} />
        <FormComponent
          active={active}
          skillSelect={selectedLevel}
          handleLevelSelect={handleLevelSelect}
        />
        <ControllerStep
          indexActive={active}
          onNext={() => handleNextStep()}
          onBack={() => handleGoBackStep()}
          onSubmit={() => handleSubmit()}
        />
      </Grid>
    </Grid>
  );
}

export default App;
