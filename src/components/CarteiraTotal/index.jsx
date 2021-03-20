import { StyledCarteira } from "./style";
import { FaWallet, FaEyeSlash, FaEye } from "react-icons/fa";

const CarteiraTotal = (props) => {
  const renderEyeIcon = () => {
    if (props.hide) {
      return (
        <FaEyeSlash
          onClick={() => {
            props.handleHide();
          }}
          size="35"
          color="#3366ff"
        />
      );
    } else {
      return (
        <FaEye size="35" onClick={() => props.handleHide()} color="#3366ff" />
      );
    }
  };

  const renderTotal = () => {
    if (props.hide) {
      return "----";
    } else {
      return props.total;
    }
  };

  return (
    <StyledCarteira>
      <p class="container-titulo">Valor Da Total Da Carteira</p>
      <div class="container-valor">
        <div>
          <span class="valor">R$ {renderTotal()}</span>
          <span>{renderEyeIcon()}</span>
        </div>
        <span>
          <FaWallet size="40" color="#009933" />
        </span>
      </div>
      <p class="container-rodape">
        O valor das cotações são referentes ao ultimo fechamento da B3.
      </p>
    </StyledCarteira>
  );
};

export default CarteiraTotal;
