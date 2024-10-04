import BaseContent from '../BaseContent';
import Button from '../Button';
import './newsletter.styles.scss'

const Newsletter = () => {

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
            <input type="text" placeholder='Seu e-mail:' />

            <Button title="Quero receber as ofertas" />
          </div>

        </div>
      </BaseContent>
    </div>
  )
}

export default Newsletter;