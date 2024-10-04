import Button from '../Button';
import ImageCook from '@/assets/image/cook.jpg';

import './BoxOffer.styles.scss';




const BoxOffer = () => {
  return (
    <div className="item">
      <div className="contentImage" style={{background: `url(${ImageCook}) center no-repeat`}}>
      </div>
      <div className="title">Armário de Cozinha Completo 330cm- preto</div>
      <div className="price">R$ 1,200</div>
      <div className="newPrice">por: <strong>R$ 1,200</strong></div>
      <Button title="Fale com um consultor" />
    </div>
  );
}

export default BoxOffer;