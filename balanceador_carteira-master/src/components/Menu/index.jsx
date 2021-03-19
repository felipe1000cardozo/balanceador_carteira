import { Link } from "react-router-dom";
import routePatchEnum from "../../enums/routePatchEnum";
import { Button } from "@material-ui/core";
import { StyledMenu } from "./style";

const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <Link to={routePatchEnum.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routePatchEnum.PORTIFOLIO_META}>Portifolio meta</Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
