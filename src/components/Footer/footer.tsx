import BaseContent from '../BaseContent';
import Button from '../Button';
import ButtonSocial from '../ButtonSocial';

import CompleteLogo from '@/assets/svg/completeLogo'
import BuyWhatsApp from '@/assets/svg/buyWhatsApp'

import './footer.styles.scss'
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <>
    <div id="footer">
      <BaseContent>
        <div className="contentFooter">
          <div>
            <div className="logo">
              <CompleteLogo />
            </div>
            <div className="contentSocial">
              <ButtonSocial type='instagram'/>
              <ButtonSocial type='facebook' />
            </div>
          </div>
          <div className="contentNav">
            <Link to="/about"><div className="navItem">Quem Somos</div></Link>
            <Link to="/offer-month"><div className="navItem">Ofertas do mês</div></Link>
            <Link to="/"><div className="navItem">Fale Conosco</div></Link>
            <Link to="/terms-and-conditions"><div className="navItem">Termos de serviço</div></Link>
          </div>
          <div>
            <div className="buyWhatsApp">
              <BuyWhatsApp />
            </div>
          </div>
          <div>
            <div className="title">
              Atendimento
            </div>
            <div className="navItem">
              Segunda à Sexta - 09h às 12h e 13h30 às
            </div>
            <div className="navItem">
              18h30, Sábado - 09h às 13h
            </div>
          </div>
        </div>
      </BaseContent>
      
    </div>
    <div className="baseboard">
      <BaseContent>
        <p>
          <strong>Zuhause Móveis e Colchões Showroom</strong> <br /> - R. Colômbia, 285 - Vila Frezzarin, Americana - SP
        </p>
      </BaseContent>
      </div>

    </>
  )
}

export default Footer;