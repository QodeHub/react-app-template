import React from "react";
import Select, { components } from "react-select";
import { ErrorBoundary } from "Utils";
import { Image } from "react-bootstrap";

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

export default function CustomSelect({
  options,
  onlyOptions,
  value,
  ...props
}) {
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

  if (onlyOptions) {
    _options = options.filter(
      (option) =>
        !!onlyOptions.find(
          (_option) => _option?.toLowerCase() === option.value?.toLowerCase()
        )
    );
  }

  return (
    <ErrorBoundary>
      <Select
        {...props}
        defaultValue={options.find(
          (option) =>
            (option.value || "").toString()?.toLowerCase() ===
            (value || "").toString()?.toLowerCase()
        )}
        options={_options}
        components={SelectComponents}
        styles={{ menuList: () => ({ paddingTop: 0, paddingBottom: 0 }) }}
      />
    </ErrorBoundary>
  );
}
