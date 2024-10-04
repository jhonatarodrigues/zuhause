import BaseContent from '../BaseContent';
import ButtonSocial from '../ButtonSocial';

import LogoSvg from '@/assets/svg/logo'
import BuyWhatsApp from '@/assets/svg/buyWhatsApp'

import './styles.scss'

const headerComponent = () => {


  return (
    <div id="nav">

      <BaseContent>
        <div className="baseInfo">

          <div className="logo">
            <LogoSvg />
          </div>

          <div className="buyWhatsapp">
            <BuyWhatsApp />
          </div>

          <div className="socialContent">
            <ButtonSocial type='instagram'/>
            <ButtonSocial type='facebook'/>
          </div>
        </div>
      </BaseContent>
      
    </div>
  )
}

export default headerComponent;