import { useState } from 'react';
import BaseContent from '../BaseContent';
import Button from '../Button';
import './newsletter.styles.scss'
import { useMail } from '@/hooks/useMail';
import Swal from 'sweetalert2';

const Newsletter = () => {
  const {sendMail} = useMail();
  const [email, setEmail] = useState('');


  const handleSendEmail = async() => {
    if (!email) {
      return;
    }

    try {
      await sendMail(email);

      // setEmail('');
      Swal.fire({
        title: "Cadastro feito com sucesso!",
        text: "Agora você receberá nossas ofertas por e-mail",
        icon: "success"
      });

    }
    catch (error) {
      console.error(error);
      Swal.fire({
        title: "Erro ao cadastrar",
        text: "Tente novamente mais tarde",
        icon: "error"
      });
    }
    
  } 

  return (
    <div id="newsletter">
      <BaseContent>
        <div className="contentNewsletter">
          <div>
            <div className="title">
              Ofertas por e-mail
            </div>
            <div className="subtitle">
              Receba tudo com exclusividade
            </div>
          </div>
          <div className='contentInput'>
            <input type="text" placeholder='Seu e-mail:' onChange={(e) => setEmail(e.target.value)} />

            <Button title="Quero receber as ofertas" onClick={handleSendEmail}/>
          </div>

        </div>
      </BaseContent>
    </div>
  )
}

export default Newsletter;