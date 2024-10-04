import './styles.scss';


type IProps = {
  children: JSX.Element
}

const BaseContent = ({children}: IProps) => {

  return (

    <div id='baseContent'>
      {children}
    </div>
  );
}

export default BaseContent;