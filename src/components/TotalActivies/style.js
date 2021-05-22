import styled from "styled-components";

export const StyledActivies = styled.div`
  border-radius: 3px;
  padding: 20px 20px;
  width: 35%;
  box-shadow: 0 0.75rem 1.5rem rgb(236 242 247 / 56%);
  margin: 20px;
  border: 1px solid rgba(242, 242, 242, 0.58);

  .container-titulo {
    color: green;
    font-size: 16px;
    margin: 10px;
  }

  .container-valor {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
    }
    .valor {
      font-size: 32px;
      margin: 14px 25px 14px 10px;
    }
  }
  .container-rodape {
    color: #777;
    font-size: 14px;
    margin: 10px;
  }
`;
