import './button.style.scss';

type ButtonProps = {
  title: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({title, className, onClick}: ButtonProps) => {

  const classes = className ? `button ${className}` : 'button';

  return (
    <button className={classes} onClick={onClick}>
      <p>{title}</p>
    </button>
  )
}

export default Button;