

import BaseContent from '../BaseContent';

import './ContactInformation.styles.scss';


const ContactInformation = () => {
  return (
    <BaseContent>
      <div className="baseInformation">
        <div className="block">
          <div className="title">
            Atendimento
          </div>
          <p className="text">
            Segunda à Sexta 09h às 18h, <br/>
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
}

export default ContactInformation;