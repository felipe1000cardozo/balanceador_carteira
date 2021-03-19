import { StyledCarteira } from './style'
import { FaWallet, FaEyeSlash } from 'react-icons/fa'

const CarteiraTotal = () => {
    return <StyledCarteira>
        <p class='container-titulo'>
            Valor Da Total Da Carteira
        </p>
        <div class='container-valor'>
            <div>
                <span class='valor'>
                    R$ 2.791,67
                </span>
                <span>
                    <FaEyeSlash size='35' color='#3366ff' />
                </span>
            </div>
            <span>
                <FaWallet size='40' color='#009933' />
            </span>
        </div>
        <p class='container-rodape'>
            O valor das cotações são referentes ao ultimo fechamento da B3.
        </p>

    </StyledCarteira>
};

export default CarteiraTotal;
