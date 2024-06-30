type ButtonProps = {
  children: React.ReactNode;
  click?: () => void;
  icon?: React.ReactElement;
};

const Button = ({ children, click, icon }: ButtonProps) => {
  return (
    <button onClick={click} className="btn-gradient">
      {icon}
      {children}
    </button>
  );
};

export default Button;
