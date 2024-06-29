import { Box, Typography } from "@mui/joy";
import DoctorImage from "../../assets/undraw_doctor.svg";

export default function CardRight() {
  return (
    <Box>
      <img src={DoctorImage} width={200} height={200} />
      <div className="d-flex flex-column">
        <Typography
          sx={{
            fontFamily: "Bariol",
            fontSize: "1.1rem",
            fontWeight: "700",
            marginBottom: "1.2rem",
            borderBottom: "1px solid white",
            color: "white",
          }}
        >
          Bienvennue
        </Typography>
        <Typography
          sx={{
            fontSize: "3.5rem",
            fontWeight: "bolder",
            fontFamily: "Bariol",
            lineHeight: "50px",
            marginTop: "0.7rem",
            color: "white",
          }}
        >
          HOPITAL
        </Typography>
        <Typography
          className="text-white"
          sx={{
            fontWeight: "bolder",
            fontSize: "1.1rem",
            fontFamily: "Bariol",
            color: "white",
          }}
        >
          NOTRE DAME DE LONDRES
        </Typography>
      </div>
    </Box>
  );
}
