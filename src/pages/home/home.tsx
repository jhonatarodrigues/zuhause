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
import ImageCook from '@/assets/image/cook.jpg';
import ImageBed from '@/assets/image/bed.jpg';

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
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
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

  const InformationBlocks = () => (
    <BaseContent>
      <div className="baseInformation">
        <div className="block">
          <div className="title">
            Atendimento
          </div>
          <p className="text">
            Segunda à Sexta 09h às 12h e 13h30 às 18h30, <br/>
            Sábado 09h às 13h
          </p>
        </div>
        <div className="block">
          <div className="title">
          Zuhause Móveis e <br></br>Colchões Showroom
          </div>
          <p className="text">
          R. Colômbia, 285 - Vila Frezzarin, Americana - SP
          </p>
        </div>
      </div>
    </BaseContent>

  );

  const MonthOffer = () => (
    <div id="MonthOffer">
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
            <Button title="Ver mais produtos" />
            </div>
          </div>
          <div className="contentOffer">
            <div className="item">
              <div className="contentImage" style={{background: `url(${ImageCook}) center no-repeat`}}>
              </div>
              <div className="title">Armário de Cozinha Completo 330cm- preto</div>
              <div className="price">R$ 1,200</div>
              <div className="newPrice">por: <strong>R$ 1,200</strong></div>
              <Button title="Fale com um consultor" />
            </div>
            <div className="item">
              <div className="contentImage" style={{background: `url(${ImageCook}) center no-repeat`}}>
              </div>
              <div className="title">Armário de Cozinha Completo 330cm- preto</div>
              <div className="price">R$ 1,200</div>
              <div className="newPrice">por: <strong>R$ 1,200</strong></div>
              <Button title="Fale com um consultor" />
            </div>
            <div className="item">
              <div className="contentImage" style={{background: `url(${ImageCook}) center no-repeat`}}>
              </div>
              <div className="title">Armário de Cozinha Completo 330cm- preto</div>
              <div className="price">R$ 1,200</div>
              <div className="newPrice">por: <strong>R$ 1,200</strong></div>
              <Button title="Fale com um consultor" />
            </div>
          </div>
        </>
      </BaseContent>
    </div>
  );

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
      <InformationBlocks />
      <MonthOffer />
      <LineFurniture />
      <Newsletter />
      <Footer />
    </>
  )


}

export {HomePage}