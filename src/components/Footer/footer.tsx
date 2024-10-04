import BaseContent from '../BaseContent';
import Button from '../Button';
import ButtonSocial from '../ButtonSocial';

import CompleteLogo from '@/assets/svg/completeLogo'
import BuyWhatsApp from '@/assets/svg/buyWhatsApp'

import './footer.styles.scss'

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
            <div className="navItem">Quem Somos</div>
            <div className="navItem">Ofertas do mês</div>
            <div className="navItem">Fale Conosco</div>
            <div className="navItem">Termos de serviço</div>
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
          <strong>Zuhause Móveis e Colchões Showroom</strong>  - R. Colômbia, 285 - Vila Frezzarin, Americana - SP
        </p>
      </BaseContent>
      </div>

    </>
  )
}

export default Footer;