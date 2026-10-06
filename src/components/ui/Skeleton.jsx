const Skeleton = ({
  variant = "text",
  width = "full",
  height = "auto",
  className = "",
}) => {
  const variants = {
    text: "h-4 rounded",
    title: "h-6 rounded",
    circle: "rounded-full",
    rectangle: "rounded-lg",
    card: "rounded-2xl",
  };

  return (
    <div
      className={`
        animate-pulse bg-gray-200
        ${variants[variant]}
        ${width === "full" ? "w-full" : `w-${width}`}
        ${height !== "auto" ? `h-${height}` : ""}
        ${className}
      `}
    />
  );
};

export default Skeleton;