const Card = ({
  children,
  variant = "default",
  hover = false,
  padding = "md",
  className = "",
  ...props
}) => {
  const variants = {
    default: "bg-white border border-gray-200",
    elevated: "bg-white shadow-medium",
    outlined: "bg-white border-2 border-primary-200",
    flat: "bg-gray-50 border border-gray-100",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        rounded-2xl transition-all duration-300
        ${variants[variant]}
        ${paddings[padding]}
        ${hover ? "hover:shadow-strong hover:-translate-y-1 cursor-pointer" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;