import { Grid } from "@mui/material";
import Step from "./Step";
import { HeaderProps } from "../types/ComponentsProps";

export default function HeaderStep({active,succesFinal}:HeaderProps) {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "",
        marginBottom: "1.8rem",
      }}
    >
      <Step props={{ index: 1, lineNext: false }} indexActive={active} succesFinal={succesFinal} />
      <Step props={{ index: 2, lineNext: true }} indexActive={active} succesFinal={succesFinal}/>
      <Step props={{ index: 3, lineNext: true }} indexActive={active} succesFinal={succesFinal}/>
      <Step props={{ index: 4, lineNext: true }} indexActive={active} succesFinal={succesFinal}/>
    </Grid>
  );
}
