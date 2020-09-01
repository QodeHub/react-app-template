import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import S from "react-select";

import { ErrorBoundary } from "Utils";

/**
 * prop types
 */
const propTypes = {
  options: PropTypes.array.isRequired,
  onlyOptions: PropTypes.array,
  value: PropTypes.any.isRequired,
};

/**
 * styles
 */
const styles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    borderColor: isFocused
      ? "#333 !important"
      : "rgba(0, 0, 0, 0.1) !important",
    boxShadow: "none",
    height: "100%",
  }),
  menuList: () => ({
    paddingBottom: 0,
    overflow: "auto",
    maxHeight: 200,
    paddingTop: 0,
    zIndex: 999,
  }),
  menuPortal: (base) => ({ ...base, zIndex: 999 }),
  menu: (styles) => ({
    ...styles,
    boxShadow: "0 0px 8px 0 rgba(0, 0, 0, 0.12) !important",
    border: "none !important",
    backgroundColor: "#fff",
    paddingBottom: "8px",
    paddingTop: "8px",
    zIndex: 999,
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor: (isSelected && "#f5f5f5 !important") || "#fff!important",
    outline: "none",
    color: "#000",
  }),
  valueContainer: (styles) => ({
    ...styles,
    width: "100%",
    display: "inline-flex",
    flexWrap: "nowrap",
    overflowX: "auto",
  }),
  multiValue: (styles) => ({
    ...styles,
    minWidth: "auto",
  }),
};

const Slt = styled(S)`
  .Select-menu-outer {
    z-index: 999;
  }
`;

function Select({ options, onlyOptions, value, ...props }) {
  const Components = {
    IndicatorSeparator: () => null,
    ClearIndicator: () => null,
  };

  let _options = options;
  let _value = "";

  if (onlyOptions) {
    _options = options.filter(
      (option) =>
        !!onlyOptions.find(
          (_option) => _option?.toLowerCase() === option.value?.toLowerCase(),
        ),
    );
  }

  if (value) {
    if (!Array.isArray(value)) {
      _value =
        options.find(
          (option) =>
            (option.value || "").toString()?.toLowerCase() ===
              (value || "").toString()?.toLowerCase() || "",
        ) || "";
    }

    if (Array.isArray(value)) {
      _value = options.filter((option) =>
        value?.map((v) => String(v)).includes((option.value || "").toString()),
      );
    }
  }

  return (
    <ErrorBoundary>
      <Slt
        {...props}
        value={_value}
        styles={styles}
        options={_options}
        components={Components}
      />
    </ErrorBoundary>
  );
}

Select.propTypes = propTypes;

export default Select;
