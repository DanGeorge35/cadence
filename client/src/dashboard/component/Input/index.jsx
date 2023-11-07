import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  gradient: { white_A700_26_white_A700_26: "bg-gradient  text-white-A700" },
  fill: {
    gray_101: "bg-gray-101",
    white_A700: "bg-white-A700 text-bluegray-900",
  },
};
const shapes = { round: "rounded-[15px]" };
const sizes = { xs: "p-4", sm: "pb-[21px] sm:pl-5 pl-[21px] pt-[22px]" };

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "xs",
      variant = "fill",
      color = "",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName}
              ${shapes[shape] || ""}
              ${variants[variant]?.[color] || ""}
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf([
    "white_A700_26_white_A700_26",
    "gray_101",
    "white_A700",
  ]),
};

export { Input };
