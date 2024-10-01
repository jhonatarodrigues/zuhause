
type IProps = {
  children: JSX.Element
}

const BaseContent = ({children}: IProps) => {

  return (

    <div>
      {children}
    </div>
  );
}

export default BaseContent;