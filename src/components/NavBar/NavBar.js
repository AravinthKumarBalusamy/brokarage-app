import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useStateValue } from "../../store/Provider";
import SignInForm from "../Registration/Login";
import "./NavBar.css";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [{ user }, dispatch] = useStateValue();

  const toggle = () => setIsOpen(!isOpen);

  const changePath = (name) => {
    dispatch({
      type: "SET_PATH",
      name,
    });
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Brokarage</NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Home
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem onClick={() => changePath("client")}>
                  Client List
                </DropdownItem>
                <DropdownItem onClick={() => changePath("signup")}>
                  Client Registration
                </DropdownItem>
                <DropdownItem onClick={() => changePath("brokarage")}>
                  Brokarage
                </DropdownItem>
                <DropdownItem onClick={() => changePath("portfoliogroup")}>
                  Portfolio groups
                </DropdownItem>
                <DropdownItem onClick={() => changePath("clientpayout")}>
                  Client payout
                </DropdownItem>
                <DropdownItem onClick={() => changePath("branchpayout")}>
                  Branch payout
                </DropdownItem>
                <DropdownItem onClick={() => changePath("investment")}>
                  Project investment
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sign in
              </DropdownToggle>
              <DropdownMenu right className="navbar-dropdown-menu">
                <SignInForm toggle={isOpen} />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
