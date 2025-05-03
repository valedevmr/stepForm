import { Box, useMediaQuery, useTheme } from "@mui/material";
import { StepProps } from "../types/ComponentsProps";
const Step = ({ props, indexActive,succesFinal }: StepProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <aside
      style={{
        display: succesFinal?"none":"flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.lineNext && (
        <Box
          component="article"
          style={{
            width: isMobile ? "1.2rem" : "7rem",
            height: isMobile ? "4px" : "5px",
            padding: "0 5px 0 5px",
          }}
        >
          <span
            style={{
              background: props.index <= indexActive ? "#ef6900" : "#cfcece",
              width: "100%",
              height: "100%",
              display: "block",
              transition: "background .8s ease", // Transición de 2 segundos
            }}
          ></span>
        </Box>
      )}
      <article
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: props.index <= indexActive ? "#ef6900" : "#cfcece",
          borderRadius: "50%",
          color: props.index <= indexActive ? "white" : "black",
          fontWeight: props.index <= indexActive ? "bold" : "",
          transition: "background .8s ease, color .8s ease", // Transición para fondo y color
        }}
      >
        {props.index}
      </article>
    </aside>
  );
};
export default Step;
