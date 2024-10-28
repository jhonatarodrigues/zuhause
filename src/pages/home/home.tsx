import React, {useEffect, useState} from "react";

import HeaderComponent from '@/components/Header';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './style.scss'
import BaseContent from "@/components/BaseContent";
import Button from "@/components/Button";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import IconCozinha from '@/assets/svg/cozinha';
import IconDecoracao from '@/assets/svg/decoracao';
import IconEscritorio from '@/assets/svg/escritorio';
import IconHomeWear from '@/assets/svg/homeWear';
import IconQuarto from '@/assets/svg/quarto';
import IconSalaStar from '@/assets/svg/salaStar';
import IconSalaJantar from '@/assets/svg/salaJantar';
import BoxOffer from "@/components/BoxOffer";
import ContactInformation from "@/components/ContactInformation";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import Product from "@/models/product";
import { useHome } from "@/hooks/useHome";
import ImageHome from "@/models/imageHome";
import Banner from "@/models/banner";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>();
  const [imageOrnament, setImageOrnament] = useState<ImageHome>();
  const [banner, setBanner] = useState<Banner[]>();
  const { getProductsHome } = useProducts();
  const { getImageOrnamentHome, getBanner } = useHome();

  useEffect(() => {
    const getBannerHome = async () => {
      const response = await getBanner();

      setBanner(response);
    }

    getBannerHome();
  }, []);

  useEffect(() => {
    const getImageHome = async () => {
      const response = await getImageOrnamentHome();

      setImageOrnament(response);
    }

    getImageHome();
  }, []);  

  useEffect(() => {
    const getBaseProducts = async () => {
      const response = await getProductsHome();

      setProducts(response);
    };

    
    getBaseProducts();
  }, []);

  const Banner = () => {
    const responsiveCarousel = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 667 },
        items: 1,
        slidesToSlide: 21
      },
      mobile: {
        breakpoint: { max: 667, min: 0 },
        items: 1,
        slidesToSlide: 1 
      }
    }

    return (
      <div className="banner">
        {banner && banner.length > 0 && (
          <>
            <Carousel 
              responsive={responsiveCarousel} 
              showDots
              infinite={false}
              containerClass="carousel-container-home"
            >
              {banner && banner.map((banner, index) => {
                if(!banner.thumbnail_url) {
                  return null;
                }

                return (
                  <div className="imageBanner" style={{background: `url(${banner.thumbnail_url}) center no-repeat`}}></div>
                )
              })}
            </Carousel>

            <Carousel 
              responsive={responsiveCarousel} 
              showDots
              infinite={false}
              containerClass="carousel-container-home-mobile"
            >
            {banner && banner.map((banner) => {
              if(!banner.acf.banner_mobile) {
                return null;
              }

              return (
                <div className="imageBanner" style={{background:  `url(${banner.acf.banner_mobile}) center no-repeat` }}></div>
              );
            }
            )}
          </Carousel>
         </>
        )}
      </div>
    )
  }

  const LooseFurniture = () => {
    const responsiveCarousel = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 667 },
        items: 2,
        slidesToSlide: 2 
      },
      mobile: {
        breakpoint: { max: 667, min: 0 },
        items: 1,
        slidesToSlide: 1 
      }
    }
    return (
      
      <div className="looseFurniture">
        <BaseContent>
          <h3 className="title">
          Linha completa em móveis soltos você encontra aqui
          </h3>
        </BaseContent>

        <Carousel 
          responsive={responsiveCarousel} 
          showDots={false} 
          infinite={false}
          centerMode
        >
          <div className="contentFurnitureItem">
            <div className="itemFurniture">
              <div className="iconContent">
                <IconCozinha />
              </div>
              <p className="itemLabel">
                Cozinha
              </p>
            </div>
          </div>
          <div className="contentFurnitureItem">
            <div className="itemFurniture">
              <div className="iconContent">
                <IconDecoracao />
              </div>
              <p className="itemLabel">
                Decoração
              </p>
            </div>
          </div>
          <div className="contentFurnitureItem">
            <div className="itemFurniture">
              <div className="iconContent">
                <IconEscritorio />
              </div>
              <p className="itemLabel">
                Escritório
              </p>
            </div>
          </div>
          <div className="contentFurnitureItem">
            <div className="itemFurniture">
              <div className="iconContent">
                <IconHomeWear />
              </div>
              <p className="itemLabel">
                Home Wear
              </p>
            </div>
          </div>
          <div className="contentFurnitureItem">
            <div className="itemFurniture">
              <div className="iconContent">
                <IconQuarto />
              </div>
              <p className="itemLabel">
                Quarto
              </p>
            </div>
          </div>
          <div className="contentFurnitureItem">
            <div className="itemFurniture">
              <div className="iconContent">
                <IconSalaStar />
              </div>
              <p className="itemLabel">
                Sala de estar
              </p>
            </div>
          </div>
          <div className="contentFurnitureItem">
            <div className="itemFurniture">
              <div className="iconContent">
                <IconSalaJantar />
              </div>
              <p className="itemLabel">
                Sala de jantar
              </p>
            </div>
          </div>
          
        </Carousel>
        
      </div>
    

  )}


  const MonthOffer = () => {
    const responsiveCarousel = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 667 },
        items: 1,
        slidesToSlide: 1 
      },
      mobile: {
        breakpoint: { max: 667, min: 0 },
        items: 1,
        slidesToSlide: 1 
      }
    }
    return (
      <div id="MonthOfferHome">
        <BaseContent>
          <>
            <div className="contentTitle">
              <div>
                <div className="title">
                  Ofertas do mês
                </div>
                <div className="subtitle">
                  aproveite nossas ofertas imperdíveis
                </div>
              </div>
              <div>
              <Link to="/offer-month">
                <Button title="Ver mais produtos" />
              </Link>
              </div>
            </div>
            <div className="contentOffer">
              {products && products.map((product, index) => (
                <BoxOffer product={product} />
              ))}              
              
            </div>
            <div className="contentOfferMobile">
              {products && products.length > 0 && (
                <Carousel 
                  responsive={responsiveCarousel} 
                  showDots={false} 
                  infinite={false}
                >
                  {products && products.map((product, index) => (
                    <BoxOffer product={product} />
                  ))} 
                </Carousel>
              )}
            </div>
            <Button title="Ver mais produtos" className="MoreProductsMobile" />
          </>
        </BaseContent>
      </div>
    );
  };

  const LineFurniture = () => (
    <BaseContent>
      <div className="lineFurniture">
        <div className="title">
          Linha completa em móveis soltos
        </div>
        <div className="contentImages">
          <div className="one" style={{background: imageOrnament?.acf.banner_home1 ? `url(${imageOrnament?.acf.banner_home1}) center no-repeat` : ''}}></div>
          <div className="block">
            <div className="two" style={{background: imageOrnament?.acf.banner_home2 ? `url(${imageOrnament?.acf.banner_home2}) top no-repeat` : ''}}></div>
            <div className="two" style={{background: imageOrnament?.acf.banner_home3 ? `url(${imageOrnament?.acf.banner_home3}) bottom no-repeat`: ''}}></div>
          </div>
        </div>
      </div>
    </BaseContent>
  );


  return (
    <>
      <HeaderComponent />
      <Banner />
      <LooseFurniture />
      <ContactInformation />
      <MonthOffer />
      <LineFurniture />
      <Newsletter />
      <Footer />
    </>
  )


}

export {HomePage}