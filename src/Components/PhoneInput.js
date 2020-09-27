import React, { useEffect } from "react";
import Phone, { formatPhoneNumberIntl } from "react-phone-number-input";

import styled from "styled-components";

import { Field } from "Components";

import "react-phone-number-input/style.css";

export default function PhoneInput({
  name,
  value,
  label,
  placeholder,
  setFieldValue,
  setFieldTouched,
}) {
  /**
   * effect
   */
  useEffect(() => {
    if (value) {
      setFieldTouched(name, value);
    }
  }, [name, setFieldTouched, value]);

  return (
    <StyledField>
      <Field
        type="tel"
        name={name}
        value={value}
        component={Phone}
        defaultCountry="GH"
        useComponent={false}
        placeholder={placeholder || ""}
        label={label || "Phone number"}
        onChange={(value) =>
          setFieldValue(name, formatPhoneNumberIntl(value)?.replace(/\s/g, ""))
        }
      />
    </StyledField>
  );
}

const StyledField = styled.div`
  .PhoneInput {
    padding-left: 0px;
    overflow: hidden;

    &:focus-within {
      border-color: var(--default) !important;
    }

    .PhoneInputCountry {
      background-color: var(--pale-grey);
      justify-content: center;
      align-items: center;
      margin-right: 0px;
      display: flex;
      width: 56px;
    }

    input {
      /* font-family: "Sen", sans-serif; */
      border: none !important;
      color: var(--default);
      padding-right: 0px;
      padding-left: 16px;
      outline: none;
      height: 100%;
    }
  }
`;
