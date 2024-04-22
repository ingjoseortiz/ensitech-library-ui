import React, { useState } from "react";
//custom components
import { ApiCall } from "../../services/ApiCall";
//mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Typography } from "@mui/material";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await ApiCall({ username, password })
      .then((data) => {
        console.log(data.data);
        if (data.data === "Incorrect Credentials") {
          setMessage("Error de usuario y/o contraseña");
        } else {
          alert("bienvenido");
          window.location.href = "/";
        }
        //window.location.href = "/";
      })
      .catch((e) => {
        //alert(e.statusText);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Login</h2>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">usuario</InputLabel>
        <Input
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <FormHelperText>required</FormHelperText>
      </FormControl>
      <br />
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">password</InputLabel>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <FormHelperText>required</FormHelperText>
      </FormControl>
      <br />
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
      <Typography sx={{ color: "red" }}>{message} </Typography>
    </Box>
  );
}

export default LoginForm;
