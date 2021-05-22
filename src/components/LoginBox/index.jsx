import { ContainerLoginBox, Remeber } from "./styles";
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ContainerLoginBox>
      <div className="cadastro">
        <Button variant="contained" className="button">
          cadastre-se
        </Button>
      </div>
      <div className="container-form">
        <form>
          <p>Login</p>
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
            placeholder="Senha"
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Remeber>
            <div className="remember-checkbox">
              <input id="remember" type="checkbox" />
              <label for="remember">Lembrar depois</label>
            </div>
            <div className="remember-keys">
              <a href="#">Esqueceu sua senha?</a>
            </div>
          </Remeber>
          <Button variant="contained" type="submit" className="button">
            Login
          </Button>
        </form>
      </div>
    </ContainerLoginBox>
  );
};

export default LoginBox;
