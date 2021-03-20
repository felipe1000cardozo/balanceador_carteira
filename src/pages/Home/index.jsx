import { useEffect, useState } from "react";
import CarteiraTotal from "../../components/CarteiraTotal";
import { StyledHome } from "./style";
import TotalActivies from "../../components/TotalActivies";

const Home = () => {
  const [walletTotal, setWalletTotal] = useState({});
  const [hide, setHide] = useState(true);

  useEffect(() => {
    loadWalletTotal();
  }, []);

  const handleHide = () => {
    setHide(!hide);
  };

  const loadWalletTotal = async () => {
    const response = await fetch("http://localhost:3000/walletTotal");
    const data = await response.json();

    console.log(data);
    setWalletTotal(data);
  };

  return (
    <StyledHome>
      <CarteiraTotal
        total={walletTotal.total}
        hide={hide}
        handleHide={handleHide}
      />
      <div className="conteiner-actives">
        <TotalActivies
          name="Ações"
          val={1000}
          atual={1000}
          icon="icone"
          meta={1000}
        />
        <TotalActivies
          name="Fii's"
          val={1000}
          atual={1000}
          icon="icone"
          meta={1000}
        />
      </div>
    </StyledHome>
  );
};

export default Home;
