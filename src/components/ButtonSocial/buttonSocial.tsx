import './styles.scss';

import Instagram from '@/assets/svg/instagram';
import Facebook from '@/assets/svg/facebook';

type ButtonSocialProps = {
  type: 'instagram' | 'facebook';
}

const ButtonSocial = ({type} : ButtonSocialProps) => {

  return (
    <div className="buttonSocial">
      {type === 'instagram' && <Instagram />}
      {type === 'facebook' && <Facebook />}
    </div>
  )
}

export default ButtonSocial;