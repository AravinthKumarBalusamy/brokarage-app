import React from "react";
import { UncontrolledAlert } from "reactstrap";

export const GlobalAlert = ({ message, type }) => {
  return (
    <div>
      <UncontrolledAlert color={type} fade>
        {message}
      </UncontrolledAlert>
    </div>
  );
};
