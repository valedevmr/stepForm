import {
  Box,
  Checkbox,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormProps } from "../types/ComponentsProps";
import { checkStyle, iconsStyleSkill } from "../styles/styles";
import {
  EmojiEventsOutlined,
  Star,
  StarBorderOutlined,
  StarHalfOutlined,
} from "@mui/icons-material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FormComponent = ({ active, skillSelect,handleLevelSelect  }: FormProps) => {
  return (
    <Grid container sx={{ width: "100%" }}>
      <FormControl sx={{ textAlign: "left", width: "100%" }}>
        <Grid sx={{ display: active == 1 ? "block" : "none" }}>
          <Typography variant="h5">Personal Information</Typography>
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
                  sx={{ width: "100%", padding: "8px 0  8px 0" }}
                  color="warning"
                  placeholder="https://wwww.mirepo.github.com"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid sx={{ display: active == 2 ? "block" : "none" }}>
          <Typography variant="h5">Skill Level</Typography>
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
                  <span style={{ ...iconsStyleSkill }}>
                    <StarBorderOutlined
                      sx={{ stroke: "white", color: "white" }}
                    />
                  </span>
                  <Typography>Beginner</Typography>
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
                  <span style={{ ...iconsStyleSkill }}>
                    <StarHalfOutlined
                      sx={{ stroke: "white", color: "white" }}
                    />
                  </span>
                  <Typography>Intermediate</Typography>
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
                  <span style={{ ...iconsStyleSkill }}>
                    <Star sx={{ stroke: "white", color: "white" }} />
                  </span>
                  <Typography>Advanced</Typography>
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
                  <span style={{ ...iconsStyleSkill }}>
                    <EmojiEventsOutlined
                      sx={{ stroke: "white", color: "white" }}
                    />
                  </span>
                  <Typography>Expert</Typography>
                </aside>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid sx={{ display: active == 3 ? "block" : "none" }}>
          <Typography variant="h5">Personal Information</Typography>
          <Typography variant="body2">
            Please provide your personal details so we can get to know you
            better
          </Typography>

          <Box sx={{ bgcolor: "", marginTop: "2rem" }}>
            <Grid container sx={{ width: "100%" }} spacing={5}>
              <Grid size={{ xs: 6, md: 6 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Checkbox {...label} />
                  <Typography>Beginner</Typography>
                </aside>
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Checkbox {...label} />
                  <Typography>Beginner</Typography>
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
                  <Checkbox {...label} />
                  <Typography>Beginner</Typography>
                </aside>
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <aside style={{ ...checkStyle, border: "1px solid #cfcece" }}>
                  <Checkbox {...label} />
                  <Typography>Beginner</Typography>
                </aside>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid sx={{ display: active == 4 ? "block" : "none" }}>
          <Typography variant="h5">Personal Information</Typography>
          <Typography variant="body2">
            Please provide your personal details so we can get to know you
            better
          </Typography>

          <Box sx={{ bgcolor: "", marginTop: "2rem" }}>
            <Grid container sx={{ width: "100%" }} spacing={5}>
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  name="fullName"
                  label="Full Name"
                  variant="standard"
                  sx={{ width: "100%" }}
                  color="warning"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  name="email"
                  label="Email Address"
                  variant="standard"
                  sx={{ width: "100%" }}
                  color="warning"
                />
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ width: "100%", marginTop: "2rem" }}
              spacing={5}
            >
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  name="phoneNumber"
                  label="Phone Number"
                  variant="standard"
                  sx={{ width: "100%" }}
                  color="warning"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  name="Portfolio"
                  label="Portfolio / GitHub"
                  variant="standard"
                  sx={{ width: "100%" }}
                  color="warning"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </FormControl>
    </Grid>
  );
};

export default FormComponent;
