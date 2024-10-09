import './styles.scss';

import Instagram from '@/assets/svg/instagram';
import Facebook from '@/assets/svg/facebook';

type ButtonSocialProps = {
  type: 'instagram' | 'facebook';
}

const ButtonSocial = ({type} : ButtonSocialProps) => {

  return (
    <div className="buttonSocial">
      {type === 'instagram' && (
        <a href="https://www.instagram.com/zuhausemoveisecolchoes/?hl=pt-br" target='_blank' rel="noreferrer">
          <Instagram />
        </a>
      )}
      {type === 'facebook' && (
        <a href="https://www.facebook.com/zuhausemoveisecolchoes/?locale=pt_BR" target='_blank' rel="noreferrer">
          <Facebook />
        </a>
      )}
    </div>
  )
}

export default ButtonSocial;