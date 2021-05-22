import { ContainerLoginBox, Remeber } from "./styles";
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ContainerLoginBox>
      <div className="cadastro">
        <Button variant="contained" className="button">
          Login
        </Button>
      </div>
      <div className="container-form">
        <form>
          <p>Faça seu cadastro</p>
          <TextField
            label="Name"
            placeholder="Nome"
            type="text"
            id="name"
            name="name"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            label="Email"
            placeholder="exemplo@email.com"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            label="Senha"
            placeholder="Crie sua senha"
            type="password"
            id="Newpassword"
            name="Newpassword"
            autoComplete="current-password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <TextField
            label="Confirme sua senha"
            placeholder="Confirme sua senha"
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button variant="contained" type="submit" className="button">
            cadastrar
          </Button>
        </form>
      </div>
    </ContainerLoginBox>
  );
};

export default Register;
