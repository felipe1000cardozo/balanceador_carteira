import styled from "styled-components";

const MainLogin = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100vh;
`;

const ContainerLoginBox = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  p {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 10%;
    color: #26a329;
  }
  form {
    width: 50%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    .MuiFormControl-root {
      border-radius: 1px solid;
      margin: 8px 12px 12px 12px;
    }
  }
  .cadastro {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 28px;
  }
  .container-form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button {
    margin-top: 22px;
    background-color: #26a329;
    color: white;
  }
  .button:hover {
    background-color: white;
    color: #26a329;
  }
`;

export { ContainerLoginBox };
