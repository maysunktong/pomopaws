const Button: React.FC<ModalProps> = ({ children }) => {
 
  return (
    <button type="button" className="button-main">
      {children}
    </button>
  );
};

export default Button;
