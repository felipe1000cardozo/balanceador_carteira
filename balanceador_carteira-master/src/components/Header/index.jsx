import Menu from "../Menu";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        Carteira <span>holder</span>
      </h1>
      <Menu />
    </StyledHeader>
  );
};

export default Header;
