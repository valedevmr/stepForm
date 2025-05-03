import { Button, Grid } from "@mui/material";
import { controllerStep } from "../types/ComponentsProps";

const ControllerStep = ({ indexActive,onNext,onBack,onSubmit,succesFinal }: controllerStep) => {
  return (
    <Grid container sx={{ width: "100%", marginTop: "3.5rem" ,display:!succesFinal?"auto":"none"}}>
      <Grid
        size={{ md: 6, sm: 6, xs: 6 }}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {indexActive !== 1  && (
          <Button
            variant="outlined"
            sx={{ borderColor: "#ef6900", color: "#ef6900",minWidth:"8rem" }}
            onClick={onBack}
          >
            Go Back
          </Button>
        )}
      </Grid>

      <Grid
        size={{ md: 6, sm: 6, xs: 6 }}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button variant="contained" sx={{ bgcolor: "#ef6900",minWidth:"8rem" }}  onClick={indexActive==4?onSubmit:onNext}>
          {indexActive==4?"Submit":"Next Step"}
        </Button>
       
      </Grid>
    </Grid>
  );
};

export default ControllerStep;
