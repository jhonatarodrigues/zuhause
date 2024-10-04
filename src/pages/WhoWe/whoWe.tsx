import React from "react";

import HeaderComponent from '@/components/Header';
import BaseContent from "@/components/BaseContent";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

import './whoWe.styles.scss'

const WhoWe = () => {

  return (
    <>
      <HeaderComponent />
      
      <div className="WhoWe">
        <BaseContent>
          <>
            <h1>Quem Somos</h1>

            <div className="text">
              A <strong>Zuhause</strong> acredita nas pessoas e acredita que o lar é o lugar onde elas tem seus momentos, ondem pensam, planejam e constroem seus sonhos. Por isso, trabalhamos com parceiros fabricantes de móveis e colchões que acreditamos ser o melhor no mercado.
              <br /><br />
              Nossa loja oferece conceito único, voltado para quem busca mais qualidade para a sua vida e de sua família. Acreditamos na força do trabalho, na ética, na vontade de crescer e no respeito às pessoas e ao meio ambiente. Nosso sucesso está diretamente ligado a você nosso cliente.
            </div>
          </>
        </BaseContent>
      </div>
     
      <Newsletter />
      <Footer />
    </>
  )


}

export {WhoWe}