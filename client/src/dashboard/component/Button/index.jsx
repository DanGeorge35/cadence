import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[20px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs",
    indigo_700: "bg-indigo-700 shadow-bs text-white-A700",
    indigo_600: "bg-indigo-600 text-white-A700",
    gray_102: "bg-gray-102",
  },
  outline: {
    green_600: "border-2 border-green-600 border-solid",
    red_700: "border-2 border-red-700 border-solid",
    indigo_600: "border border-indigo-600 border-solid text-indigo-600",
    indigo_500: "border border-indigo-500 border-solid text-indigo-500",
  },
};
const sizes = { xs: "p-2", sm: "p-3", md: "p-[15px]", lg: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "indigo_700",
    "indigo_600",
    "gray_102",
    "green_600",
    "red_700",
    "indigo_500",
  ]),
};

export { Button };
