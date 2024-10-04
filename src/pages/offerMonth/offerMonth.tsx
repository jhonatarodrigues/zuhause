import React from "react";

import HeaderComponent from '@/components/Header';
import BaseContent from "@/components/BaseContent";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BoxOffer from "@/components/BoxOffer";

import BuyWhatsApp from '@/assets/svg/buyWhatsApp';

import './style.scss'
import ContactInformation from "@/components/ContactInformation";


const OfferMonth = () => {

  

 


  return (
    <>
      <HeaderComponent />
    
      <div id="MonthOffer">
        <BaseContent>
          <>
            <h1>Ofertas do mês</h1>
            <div className="contentOffer">
              <BoxOffer />
              <BoxOffer />
              <BoxOffer />

              <BoxOffer />
              <BoxOffer />
              <BoxOffer />
            </div>
            <div className="BuyWhatsApp">
              <BuyWhatsApp />
            </div>
            <div className="contentOffer">
              <BoxOffer />
              <BoxOffer />
              <BoxOffer />

              <BoxOffer />
              <BoxOffer />
              <BoxOffer />
            </div>
            <ContactInformation />
          </>
        </BaseContent>
      </div>
      


      <Newsletter />
      <Footer />
    </>
  )


}

export {OfferMonth}