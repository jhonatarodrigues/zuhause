import BaseContent from '../BaseContent';
import ButtonSocial from '../ButtonSocial';

import LogoSvg from '@/assets/svg/logo'
import BuyWhatsApp from '@/assets/svg/buyWhatsApp'

import './styles.scss'
import { Link } from 'react-router-dom';

const headerComponent = () => {


  return (
    <div id="nav">

      <BaseContent>
        <div className="baseInfo">

          <Link to="/">
            <div className="logo">
              <LogoSvg />
            </div>
          </Link>

          <div className="buyWhatsapp">
            <a href={`https://wa.me/+${process.env.REACT_APP_WHATHSAPP_NUMBER}?text=olá, vim pelo site da Zuhause`} target='_blank' rel="noreferrer" >
              <BuyWhatsApp />
            </a>
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