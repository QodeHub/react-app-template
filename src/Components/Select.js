import React from "react";
import Select, { components } from "react-select";
import { Image } from "react-bootstrap";

import { ErrorBoundary } from "Utils";

const { Control, Option, SingleValue } = components;

/**
 * styles
 */
const iconStyle = {
  height: 16,
  maxWidth: "100%",
  display: "block",
  marginRight: 8,
};

export function Content({ children, ...props }) {
  return (
    <div className="d-flex align-items-center">
      {props.data?.icon && (
        <Image
          src={props.data.icon}
          className="select__icon"
          style={iconStyle}
        />
      )}
      <span className="select__content">{children}</span>
    </div>
  );
}

export default ({ options, onlyOptions, value, ...props }) => {
  const SelectComponents = {
    Option: ({ children, ...props }) => (
      <Option {...props}>
        <Content children={children} {...props} />
      </Option>
    ),
    SingleValue: ({ children, ...props }) => (
      <SingleValue {...props}>
        <Content children={children} {...props} />
      </SingleValue>
    ),
    Control: ({ children, ...props }) => (
      <Control className={"r-select "} {...props}>
        {children}
      </Control>
    ),
    IndicatorSeparator: () => null,
  };

  let _options = options;
  let _value = "";

  if (onlyOptions) {
    _options = options.filter(
      (option) =>
        !!onlyOptions.find(
          (_option) => _option?.toLowerCase() === option.value?.toLowerCase()
        )
    );
  }

  if (value) {
    if (typeof value === "string") {
      _value =
        options.find(
          (option) =>
            (option.value || "").toString()?.toLowerCase() ===
              (value || "").toString()?.toLowerCase() || ""
        ) || "";
    }

    if (Array.isArray(value)) {
      _value = options.filter((option) =>
        value.includes((option.value || "").toString())
      );
    }
  }

  return (
    <ErrorBoundary>
      <Select
        {...props}
        value={_value}
        options={_options}
        components={SelectComponents}
        styles={{ menuList: () => ({ paddingTop: 0, paddingBottom: 0 }) }}
      />
    </ErrorBoundary>
  );
};
