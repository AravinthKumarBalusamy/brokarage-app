import React from "react";
import Input from "../shared/Input/Input";

import {
  requiredRule,
  minLengthRule,
  maxLengthRule,
  passwordMatchRule
} from "./inputValidationRules";

/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */
function createFormFieldConfig(label, name, type, defaultValue = "", valid = true) {
  return {
    renderInput: (handleChange, value, isValid, error, key) => {
      return (
        <Input
          key={key}
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    valid,
    errorMessage: "",
    touched: false
  };
}

// object representation of signup form
export const signupForm = {
  name: {
    ...createFormFieldConfig("Full Name", "name", "text", false),
    validationRules: [
      requiredRule("Name"),
      minLengthRule("Name", 3),
      maxLengthRule("Name", 25)
    ]
  },
  photo: {
    ...createFormFieldConfig("Photo", "photo", "file", false),
    validationRules: [
      requiredRule("Photo"),
    ]
  },
  panNumber: {
    ...createFormFieldConfig("PAN Number", "panNumber", "text", false),
    validationRules: [
      requiredRule("PAN Number"),
      minLengthRule("PAN Number", 10),
      maxLengthRule("PAN Number", 10)
    ]
  },
  idProof: {
    ...createFormFieldConfig("ID Proof", "idProof", "text"),
    validationRules: []
  },
  addresses: {
    ...createFormFieldConfig("Addresses", "addresses", "textarea"),
    validationRules: []
  },
  bankName: {
    ...createFormFieldConfig("Bank Name", "bankName", "text"),
    validationRules: []
  },
  bankAccountNumber: {
    ...createFormFieldConfig("Bank Account Number", "bankAccountNumber", "text"),
    validationRules: []
  },
  ifscCode: {
    ...createFormFieldConfig("IFSC Code", "ifscCode", "text"),
    validationRules: []
  },
  micrCode: {
    ...createFormFieldConfig("MICR Code", "micrCode", "text"),
    validationRules: []
  },
  cheque: {
    ...createFormFieldConfig("Cheque Leaf", "cheque", "text"),
    validationRules: []
  },
  email: {
    ...createFormFieldConfig("Email", "email", "email", false),
    validationRules: [
      requiredRule("email"),
      minLengthRule("email", 10),
      maxLengthRule("email", 25)
    ]
  },
  password: {
    ...createFormFieldConfig("Password", "password", "password", false),
    validationRules: [
      requiredRule("password"),
      minLengthRule("password", 8),
      maxLengthRule("password", 20)
    ]
  },
  confirmPassword: {
    ...createFormFieldConfig("Confirm Password", "confirmPassword", "password", false),
    validationRules: [passwordMatchRule()]
  }
};

// object representation of signin form
export const signinForm = {
  email: {
    ...createFormFieldConfig("Email", "email", "email", false),
    validationRules: [
      requiredRule("Email"),
    ]
  },
  password: {
    ...createFormFieldConfig("Password", "password", "password", false),
    validationRules: [
      requiredRule("Password"),
    ]
  }
};
