import React from "react";

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
import ImageBed from '@/assets/image/bed.jpg';
import BoxOffer from "@/components/BoxOffer";
import ContactInformation from "@/components/ContactInformation";
import { Link } from "react-router-dom";

const HomePage = () => {


  const Banner = () => (
    <div className="banner"></div>
  );

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
              <BoxOffer />
              <BoxOffer />
              <BoxOffer />
            </div>
            <div className="contentOfferMobile">
              <Carousel 
                responsive={responsiveCarousel} 
                showDots={false} 
                infinite={false}
              >
                <BoxOffer />
                <BoxOffer />
                <BoxOffer />
              </Carousel>
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
          <div className="one" style={{background: `url(${ImageBed}) center no-repeat`}}></div>
          <div className="block">
            <div className="two" style={{background: `url(${ImageBed}) top no-repeat`}}></div>
            <div className="two" style={{background: `url(${ImageBed}) bottom no-repeat`}}></div>
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