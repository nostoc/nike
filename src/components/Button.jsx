const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 border-coral-red font-montserrat text-lg leading-none
    
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : " bg-coral-red  text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arro-right-icon"
          className=" ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
