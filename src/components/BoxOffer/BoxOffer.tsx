import Fancybox from "@/libs/fancybox";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Button from '../Button';

import './BoxOffer.styles.scss';
import Product from '@/models/product';

type BoxOfferProps = {
  product: Product;
}

const BoxOffer = ({product}: BoxOfferProps) => {  
  const selectedImage = product.acf.imagens && product.acf.imagens[0] ? product.acf.imagens[0] : '';
  const background = selectedImage ? `url(${selectedImage}) no-repeat center center / cover` : '';
  
  
  return (
   
    <div className="item">
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
          <div className="hideImages">
            {product.acf.imagens && product.acf.imagens.map((image) => {
              if(image === selectedImage) return null;
              return (
                <a data-fancybox={`gallery_${product.id}`} href={image}></a>
              )
            })}

          </div>
          <a data-fancybox={`gallery_${product.id}`} href={selectedImage} >
            <div className="contentImage" style={{background: background}}>
            </div>
          </a>
          
          <div className="title">{product.title.rendered}</div>
          <div className="price">{product.acf.preco}</div>
          {product.acf.novo_preco && (
            <div className="newPrice">por: <strong>{product.acf.novo_preco}</strong></div>
          )}
          <a href={`https://wa.me/+${process.env.REACT_APP_WHATHSAPP_NUMBER}?text=estou interessado no produto ${product.title.rendered}`} target='_blank' rel="noreferrer">
            <Button title="Fale com um consultor" />
          </a>
      </Fancybox>
    </div>
  );
}

export default BoxOffer;