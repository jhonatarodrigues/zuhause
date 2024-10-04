import './button.style.scss';

type ButtonProps = {
  title: string;
  className?: string;
}

const Button = ({title, className}: ButtonProps) => {

  const classes = className ? `button ${className}` : 'button';

  return (
    <div className={classes} >
      <p>{title}</p>
    </div>
  )
}

export default Button;