const CustomButton = ({
  text,
  icon,
  iconPosition = "right",
  variant = "filled",
  onClick,
  className = "",
}) => {

  const base = "flex items-center justify-center gap-2 py-3 px-6 rounded-lg transition duration-300 hover:cursor-pointer";
  
  const styles = 
  variant === "filled"
    ? "bg-white text-black hover:bg-gray-200"
    : "bg-transparent text-white hover:scale-103 transition-transform duration-200 font-semibold";
  
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {icon && iconPosition === "left" && <img src={icon} alt="" className="h-5 w-5" />}
      <span>{text}</span>
      {icon && iconPosition === "right" && <img src={icon} alt="" className="h-5 w-5" />}
    </button>
  );
};

export default CustomButton;