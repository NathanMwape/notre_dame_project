import { Box, Button, Grid, Typography } from "@mui/joy";
import { useEffect, useRef, useState } from "react";
import "../assets/Authenticate.css";
import CardRight from "./components/CardRigh";
import ValidateInput from "./components/ValidateInput";
import Id from "./components/functions";
import { supabase } from "../supabaise-config/supabaiseClient";

export default function Login() {
  const [loading, setLoading] = useState(false);

  let eyeOff = useRef();
  let eyeOn = useRef();
  let switchElm = useRef();
  let usernameElm = useRef();
  let passwordElm = useRef();
  let buttonConnElm = useRef();

  let validateUsername = useRef();
  let validatePassword = useRef();

  const closeWrongInput = (ev) => {
    ev.target.parentNode.style.visibility = "hidden";
    ev.target.parentNode.style.opacity = "0";
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target
    supabase.auth.signInWithPassword({
        email: form.email.value,
        password: form.password.value,
      }).then((response) => {
        console.log(response)
          if (response.error) {
              // setErrorLogin(true)
          } else {
            location.replace('/');
          }
          setLoading(false)
      }).catch((error) => {
        alert(error.message);
        setLoading(false)
      })
  }

  useEffect(() => {
    eyeOff.current = document.querySelector(".eye-off");
    eyeOn.current = document.querySelector(".eye-on");
    switchElm.current = Id("switch-password");
    passwordElm.current = Id("password");
    usernameElm.current = Id("username");
    buttonConnElm.current = Id("btn-conn");

    validateUsername.current = new ValidateInput(
      usernameElm.current,
      Id("error-username")
    );

    validatePassword.current = new ValidateInput(
      passwordElm.current,
      Id("error-password")
    );

    switchElm.current.onclick = () => {
      if (eyeOff.current.style.display === "none") {
        eyeOff.current.style.display = "";
        eyeOn.current.style.display = "none";
        passwordElm.current.type = "text";
      } else {
        eyeOn.current.style.display = "";
        eyeOff.current.style.display = "none";
        passwordElm.current.type = "password";
      }
    };

    buttonConnElm.current.onclick = () => {
      validateUsername.current.validate();
      validatePassword.current.validate();
    };
  }, []);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor: "#fdfdff" }}
      component={'form'}
      onSubmit={onSubmitForm}
    >
      <Box
        className="container"
        sx={{
          width: "750px",
          height: "550px",
          boxShadow: "rgba(0, 0, 0, 0.2) 0 1px 20px 0",
          borderRadius: "12px",
          paddingLeft: "14px",
          paddingRight: "19px",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          backgroundColor: "white",
        }}
      >
        <Grid className="row">
          <div
            item
            xs={12}
            sm={7}
            className="col pe-4 ps-4"
            style={{ marginTop: "6px" }}
          >
            <Typography
              level="h1"
              sx={{
                marginTop: "2.5rem",
                textAlign: "center",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Authen<span style={{ color: "chocolate" }}>tification</span>
            </Typography>

            <Box sx={{ marginTop: "0.9rem", marginBottom: "3px" }}>
              <label className="form-label">Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                className="form-control"
                name="email"
                placeholder="Nom d'utilisateur"
                required
              />
              <div className="error" id="error-username">
                Nom d'utilisateur incorrect
              </div>
            </Box>

            <div className="mt-md-2 mb-3">
              <label className="form-label">Mot de passe</label>
              <div className="input-icon invalid-blk">
                <input
                  type="password"
                  id="password"
                  name='password'
                  className="form-control"
                  placeholder="Mot de passe"
                  required
                />
                <span className="input-icon-addon" id="switch-password">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon text-dark eye-on"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon text-dark eye-off"
                    style={{ display: "none" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                    <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                    <path d="M3 3l18 18" />
                  </svg>
                </span>
              </div>
              <div className="error" id="error-password">
                Mot de passe incorrect
              </div>
            </div>

            <div className="" style={{ marginTop: "2" }}>
              <Button
                className="btn btn-primary btn-pill w-100"
                id="btn-conn"
                style={{ height: "32px" }}
                type="submit"
                loading={loading}
              >
                Connexion
              </Button>
            </div>
          </div>

          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            className="col"
            id="logo-col"
            sx={{
              height: "526px",
              width: "50%",
              borderRadius: "12px",
              marginTop: "10px",
              backgroundColor: "#2e312d",
            }}
          >
            <CardRight />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
