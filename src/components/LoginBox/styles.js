import styled from "styled-components";

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
const Remeber = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1% 3% 0;
  .remember-checkbox {
    display: flex;
    align-items: center;
    label {
      margin-left: 5px;
    }
    input:checked {
      background-color: #26a329;
    }
  }
  .remember-keys {
    a {
      color: #26a329;
    }
  }
`;

export { ContainerLoginBox, Remeber };
