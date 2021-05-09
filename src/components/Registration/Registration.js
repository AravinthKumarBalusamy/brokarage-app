import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import AuthService from "../../ajaxService/auth";
import { Link } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./Registration.css";

export default function SignupForm(props) {
  const [regForm, setregForm] = useState({
    username: "",
    photo: "",
    panNumber: "",
    idProof: "",
    address1: "",
    address2: "",
    bankname: "",
    accnumber: "",
    ifscCode: "",
    micrCode: "",
    cheque: "",
  });
  const onChangeFormData = (e) => {
    setregForm({
      ...regForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    console.log(e.target);
    const [username, email, password] = [
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
    ];
    // AuthService.register(username, email, password).then(
    //   (response) => {
    //     props.history.push("/auth");
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  };

  const formIsValid = () => {
    return true;
  };

  return (
    <React.Fragment>
      <Form className="bg-card" onSubmit={handleRegister}>
        <h2>Registration</h2>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="username">Full Name</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Full Name"
                onChange={onChangeFormData}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="photo">Photo</Label>
              <Input type="file" name="photo" id="photo" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="panNumber">PAN Number</Label>
              <Input
                type="text"
                name="panNumber"
                id="panNumber"
                placeholder="PAN Number"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="idProof">ID Proof</Label>
              <Input
                type="text"
                name="idProof"
                id="idProof"
                placeholder="ID Proof"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="address1">Address 1</Label>
              <Input
                type="text"
                name="address1"
                id="address1"
                placeholder="Address"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="address2">Address 2</Label>
              <Input
                type="text"
                name="address2"
                id="address2"
                placeholder="Address"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="bankname">Bank Name</Label>
              <Input type="text" name="bankname" id="bankname" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="accnumber">Bank Account Number</Label>
              <Input type="text" name="accnumber" id="accnumber" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="ifscCode">IFSC Code</Label>
              <Input type="text" name="ifscCode" id="ifscCode" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="micrCode">MICR Code</Label>
              <Input type="text" name="micrCode" id="micrCode" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="cheque">Cheque Leaf</Label>
              <Input type="text" name="cheque" id="cheque" />
            </FormGroup>
          </Col>
        </Row>
        <Button
          color="primary"
          type="submit"
          className="btn-register"
          disabled={!formIsValid()}
        >
          Register
        </Button>
        <Link to="/user">
          <Button type="submit">Cancel</Button>
        </Link>
      </Form>
    </React.Fragment>
  );
}
