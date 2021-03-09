import styled from "styled-components";

export const StyledMenu = styled.div`
  border-radius: 10px;
  padding: 0px 20px;
  background-color: white;
  position: absolute;
  bottom: -42%;
  width: 96%;
  left: 2%;
  box-shadow: 1px 1px 10px;

  ul {
    display: flex;
    list-style-type: none;
    padding: 10px;

    li {
      padding: 5px 10px;
      font-size: 14px;
    }
  }
`;
