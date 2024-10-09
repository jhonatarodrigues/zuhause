import { useState } from 'react';
import BaseContent from '../BaseContent';
import Button from '../Button';
import './newsletter.styles.scss'

const Newsletter = () => {

  const [email, setEmail] = useState('');


  const handleSendEmail = () => {
    if (!email) {
      return;
    }

    console.log('email ---', email);
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