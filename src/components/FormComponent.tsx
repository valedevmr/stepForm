import {
  Box,
  Checkbox,
  FormControl,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FormProps } from "../types/ComponentsProps";
import { checkStyle, iconsStyleSkill } from "../styles/styles";
import { orange } from "@mui/material/colors";
import {
  AutoAwesome,
  EmojiEventsOutlined,
  Star,
  StarBorderOutlined,
  StarHalfOutlined,
} from "@mui/icons-material";
import { useState } from "react";

const FormComponent = ({
  active,
  skillSelect,
  handleLevelSelect,
  fullName,
  email,
  phoneNumber,
  Portfolio,
  onFullNameChange,
  onEmailChange,
  onPhoneNumberChange,
  onPortfolioChange,
  selectedTechnologie,
  handleCheckboxChange
}: FormProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Grid container sx={{ width: "100%" }}>
      <FormControl sx={{ textAlign: "left", width: "100%" }}>
        <Grid sx={{ display: active == 1 ? "block" : "none" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Personal Information
          </Typography>
          <Typography variant="body2">
            Please provide your personal details so we can get to know you
            better
          </Typography>

          <Box sx={{ bgcolor: "", marginTop: "2rem" }}>
            <Grid container sx={{ width: "100%" }} spacing={3}>
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  name="fullName"
                  label="Full Name"
                  variant="standard"
                  value={fullName}
                  onChange={(e) => onFullNameChange(e.target.value)}
                  sx={{ width: "100%", padding: "8px 0  8px 0" }}
                  color="warning"
                  placeholder="Juan Pérez"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  name="email"
                  label="Email Address"
                  variant="standard"
                  value={email}
                  onChange={(e) => onEmailChange(e.target.value)}
                  sx={{ width: "100%", padding: "8px 0  8px 0" }}
                  color="warning"
                  placeholder="correo@correo.com"
                />
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ width: "100%", marginTop: "2rem" }}
              spacing={3}
            >
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  name="phoneNumber"
                  label="Phone Number"
                  variant="standard"
                  value={phoneNumber}
                  onChange={(e) => onPhoneNumberChange(e.target.value)}
                  sx={{ width: "100%", padding: "8px 0  8px 0" }}
                  color="warning"
                  placeholder="5588997744"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  name="Portfolio"
                  label="Portfolio / GitHub"
                  variant="standard"
                  value={Portfolio}
                  onChange={(e) => onPortfolioChange(e.target.value)}
                  sx={{ width: "100%", padding: "8px 0  8px 0" }}
                  color="warning"
                  placeholder="https://wwww.mirepo.github.com"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid sx={{ display: active == 2 ? "block" : "none" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Skill Level
          </Typography>
          <Typography variant="body2">
            Please tell us about your skill level in frontend development
          </Typography>

          <Box sx={{ bgcolor: "", marginTop: "2rem" }}>
            <Grid container sx={{ width: "100%" }} spacing={5}>
              <Grid size={{ xs: 6, md: 6 }}>
                <aside
                  style={{
                    ...checkStyle,
                    border:
                      skillSelect === "Beginner"
                        ? "1px solid #ef6900"
                        : "1px solid #cfcece",
                    cursor: "pointer",
                  }}
                  onClick={() => handleLevelSelect("Beginner")} // Asigna el valor al hacer clic
                >
                  <span
                    style={{
                      ...iconsStyleSkill,
                      width: isMobile ? "20px" : "auto",
                      height: isMobile ? "20px" : "auto",
                    }}
                  >
                    <StarBorderOutlined
                      sx={{
                        stroke: "white",
                        color: "white",
                        width: isMobile ? "1rem" : "auto",
                      }}
                    />
                  </span>
                  <Typography sx={{ fontSize: isMobile ? ".9rem" : "auto" }}>
                    Beginner
                  </Typography>
                </aside>
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <aside
                  style={{
                    ...checkStyle,
                    border:
                      skillSelect === "Intermediate"
                        ? "1px solid #ef6900"
                        : "1px solid #cfcece",
                    cursor: "pointer",
                  }}
                  onClick={() => handleLevelSelect("Intermediate")} // Asigna el valor al hacer clic
                >
                  <span
                    style={{
                      ...iconsStyleSkill,
                      width: isMobile ? "20px" : "auto",
                      height: isMobile ? "20px" : "auto",
                    }}
                  >
                    <StarHalfOutlined
                      sx={{
                        stroke: "white",
                        color: "white",
                        width: isMobile ? "1rem" : "auto",
                      }}
                    />
                  </span>
                  <Typography sx={{ fontSize: isMobile ? ".9rem" : "auto" }}>
                    Intermediate
                  </Typography>
                </aside>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ width: "100%", marginTop: "2rem" }}
              spacing={5}
            >
              <Grid size={{ xs: 6, md: 6 }}>
                <aside
                  style={{
                    ...checkStyle,
                    border:
                      skillSelect === "Advanced"
                        ? "1px solid #ef6900"
                        : "1px solid #cfcece",
                    cursor: "pointer",
                  }}
                  onClick={() => handleLevelSelect("Advanced")} // Asigna el valor al hacer clic
                >
                  <span
                    style={{
                      ...iconsStyleSkill,
                      width: isMobile ? "20px" : "auto",
                      height: isMobile ? "20px" : "auto",
                    }}
                  >
                    <Star
                      sx={{
                        stroke: "white",
                        color: "white",
                        width: isMobile ? "1rem" : "auto",
                      }}
                    />
                  </span>
                  <Typography sx={{ fontSize: isMobile ? ".9rem" : "auto" }}>
                    Advanced
                  </Typography>
                </aside>
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <aside
                  style={{
                    ...checkStyle,
                    border:
                      skillSelect === "Expert"
                        ? "1px solid #ef6900"
                        : "1px solid #cfcece",
                    cursor: "pointer",
                  }}
                  onClick={() => handleLevelSelect("Expert")} // Asigna el valor al hacer clic
                >
                  <span
                    style={{
                      ...iconsStyleSkill,
                      width: isMobile ? "20px" : "auto",
                      height: isMobile ? "20px" : "auto",
                    }}
                  >
                    <EmojiEventsOutlined
                      sx={{
                        stroke: "white",
                        color: "white",
                        width: isMobile ? "1rem" : "auto",
                      }}
                    />
                  </span>
                  <Typography sx={{ fontSize: isMobile ? ".9rem" : "auto" }}>
                    Expert
                  </Typography>
                </aside>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid sx={{ display: active == 3 ? "block" : "none" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Challenge Preference
          </Typography>
          <Typography variant="body2">
            Please provide your personal details so we can get to know you
            better
          </Typography>

          <Box sx={{ bgcolor: "", marginTop: "2rem" }}>
            <Grid container sx={{ width: "100%" }} spacing={5}>
              <Grid size={{ xs: 6, md: 6 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Checkbox
                    checked={selectedTechnologie === "HTML/CSS/JS"}
                    onChange={() => handleCheckboxChange("HTML/CSS/JS")}
                    sx={{
                      color: orange[800],
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                  <Typography sx={{ fontSize: isMobile ? ".8rem" : "auto" }}>
                    HTML/CSS/JS
                  </Typography>
                </aside>
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Checkbox
                    checked={selectedTechnologie === "React"}
                    onChange={() => handleCheckboxChange("React")}
                    sx={{
                      color: orange[800],
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                  <Typography sx={{ fontSize: isMobile ? ".9rem" : "auto" }}>
                    ReactJs
                  </Typography>
                </aside>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ width: "100%", marginTop: "2rem" }}
              spacing={5}
            >
              <Grid size={{ xs: 6, md: 6 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Checkbox
                    checked={selectedTechnologie === "AngularJs"}
                    onChange={() => handleCheckboxChange("AngularJs")}
                    sx={{
                      color: orange[800],
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                  <Typography sx={{ fontSize: isMobile ? ".9rem" : "auto" }}>
                    AngularJs
                  </Typography>
                </aside>
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Checkbox
                    checked={selectedTechnologie === "VueJs"}
                    onChange={() => handleCheckboxChange("VueJs")}
                    sx={{
                      color: orange[800],
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                    }}
                  />
                  <Typography sx={{ fontSize: isMobile ? ".9rem" : "auto" }}>
                    VueJS
                  </Typography>
                </aside>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid sx={{ display: active == 4 ? "block" : "none" }}>
          <Typography variant="h5">Review and Confirm</Typography>
          <Typography variant="body2">
            Please review your information to make sure everthing is accurate
          </Typography>

          <Box sx={{ bgcolor: "", marginTop: "2rem" }}>
            <Grid container sx={{ width: "100%" }} spacing={2}>
              <Grid size={{ xs: 4, md: 4 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Typography sx={{ fontSize: isMobile ? ".4rem" : ".7rem" }}>
                    {fullName}
                  </Typography>
                </aside>
              </Grid>
              <Grid size={{ xs: 4, md: 4 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Typography sx={{ fontSize: isMobile ? ".4rem" : ".7rem" }}>
                    {email}
                  </Typography>
                </aside>
              </Grid>
              <Grid size={{ xs: 4, md: 4 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Typography sx={{ fontSize: isMobile ? ".4rem" : ".7rem" }}>
                    {phoneNumber}
                  </Typography>
                </aside>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ width: "100%", marginTop: "2rem" }}
              spacing={2}
            >
              <Grid size={{ xs: 4, md: 4 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Typography sx={{ fontSize: isMobile ? ".4rem" : ".7rem" }}>
                    {Portfolio}
                  </Typography>
                </aside>
              </Grid>
              <Grid size={{ xs: 4, md: 4 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Typography sx={{ fontSize: isMobile ? ".4rem" : ".7rem" }}>
                    {skillSelect}
                  </Typography>
                </aside>
              </Grid>
              <Grid size={{ xs: 4, md: 4 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Typography sx={{ fontSize: isMobile ? ".4rem" : ".7rem" }}>
                    {selectedTechnologie}
                  </Typography>
                </aside>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: active == 5 ? "block" : "none",
            // maxWidth: "rem",
            width: isMobile ? "100%" : "32rem",
            // width: "100%",
            margin: "1rem auto 5rem", // Centrado horizontal
            // border: "1px solid black",
          }}
        >
          <Grid
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            size={{ sm: 12, xs: 12 }}
          >
            <AutoAwesome
              sx={{ fontSize: "7rem", color: "#ef6900" }}
            ></AutoAwesome>
          </Grid>
          <Grid
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            size={{ sm: 12, xs: 12 }}
          >
            <h1>Congratulations!</h1>
          </Grid>
          <Grid
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            size={{ sm: 12, xs: 12 }}
          >
            <h1
              style={{
                fontSize: "1rem",
                textAlign: "center",
                fontWeight: "lighter",
              }}
            >
              Your profile has been created and you are now ready to start
              participating in challenges that match your interests and coding
              exprience level!
            </h1>
          </Grid>
        </Grid>
      </FormControl>
    </Grid>
  );
};

export default FormComponent;
