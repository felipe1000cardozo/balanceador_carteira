import { StyledActivies } from "./style";

const TotalActivies = (props) => {
  return (
    <StyledActivies>
      <p class="container-titulo">{props.name}</p>
      <div class="container-valor">
        <div>
          <span class="valor">R$ {props.val}</span>
        </div>
        <span>icone {props.icon} </span>
      </div>
      <p class="container-rodape">Meta: {props.meta}%</p>
      <p class="container-rodape">Atual: {props.atual}%</p>
    </StyledActivies>
  );
};

export default TotalActivies;
