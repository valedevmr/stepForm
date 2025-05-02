import React from "react";
import { HeaderProps, StepProps } from "../types/ComponentsProps";
const Step = ({ props, indexActive }: StepProps) => {
  return (
    <aside
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.lineNext && (
        <article
          style={{ width: "7rem", height: "4px", padding: "0 5px 0 5px" }}
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
        </article>
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
