import Button from '../Button';

import './BoxOffer.styles.scss';
import Product from '@/models/product';
import { formatPrice } from '@/utils/format';

type BoxOfferProps = {
  product: Product;
}


const BoxOffer = ({product}: BoxOfferProps) => {

  const labelPrice = product.acf.novo_preco ? `de ` : '';
  const background = product.thumbnail_url ? `url(${product.thumbnail_url}) no-repeat center center / cover` : '';

  
  return (
    <div className="item">
      <div className="contentImage" style={{background: background}}>
      </div>
      <div className="title">{product.title.rendered}</div>
      <div className="price">{labelPrice}{formatPrice(parseFloat(product.acf.preco))}</div>
      {product.acf.novo_preco && (
        <div className="newPrice">por: <strong>{formatPrice(parseFloat(product.acf.novo_preco))}</strong></div>
      )}
      <a href={`https://wa.me/+${process.env.REACT_APP_WHATHSAPP_NUMBER}?text=estou interessado no produto ${product.title.rendered}`} target='_blank' rel="noreferrer">
        <Button title="Fale com um consultor" />
      </a>
    </div>
  );
}

export default BoxOffer;