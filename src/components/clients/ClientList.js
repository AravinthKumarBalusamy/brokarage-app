import React, { useState, useEffect, useMemo, useRef } from "react";
import { useStateValue } from "../../store/Provider";
import { Table } from "../../shared/Table/Table";
import { GlobalAlert } from "../Utils/GlobalAlert";

// import {columns, data} from '../../constants/constants';

export const ClientList = (props) => {
  const [tutorials, setTutorials] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [alert, setalert] = useState({
    enable: false,
    message: "",
    type: "",
  });
  const tutorialsRef = useRef();

  const [{ isAdmin, alertType }, dispatch] = useStateValue();

  let columnValues = [
    {
      Header: "S No.",
      accessor: "serialNo",
    },
    {
      Header: "Client Id",
      accessor: "clientId",
    },
    {
      Header: "Client Name",
      accessor: "clientName",
    },
    {
      Header: "Branch Id",
      accessor: "branchId",
    },
    {
      Header: "Portfolio group",
      accessor: "portfolioGroup",
    },
    {
      Header: "Investment type",
      accessor: "invType",
    },
    {
      Header: "Agreement Date",
      accessor: "agreementDate",
    },
    {
      Header: "Expected returns",
      accessor: "expectedReturns",
    },
  ];

  if (isAdmin) {
    columnValues = [
      ...columnValues,
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => openTutorial(rowIdx)}>
                <i className="far fa-edit action mr-2"></i>
              </span>

              <span onClick={() => deleteTutorial(rowIdx)}>
                <i className="fas fa-trash action"></i>
              </span>
            </div>
          );
        },
      },
    ];
  }

  const columns = useMemo(() => columnValues, []);

  const data = [
    {
      serialNo: "1",
      clientId: "W10101",
      clientName: "JOHN",
      branchId: "WALL101",
      invType: "STK",
      agreementDate: "31-03-2021",
      portfolioGroup: "MRMP",
      expectedReturns: "MEDIUM",
    },
    {
      serialNo: "2",
      clientId: "W10102",
      clientName: "MIKE",
      branchId: "WALL102",
      invType: "STKQ",
      agreementDate: "31-03-2021",
      portfolioGroup: "MRMP",
      expectedReturns: "HIGH",
    },
    {
      serialNo: "3",
      clientId: "W10103",
      clientName: "SAM",
      branchId: "WALL103",
      invType: "STKD",
      agreementDate: "31-03-2021",
      portfolioGroup: "MRMP",
      expectedReturns: "MEDIUM",
    },
  ];

  tutorialsRef.current = data;

  useEffect(() => {
    if (alertType.message) {
      setalert({
        enable: true,
        ...alertType,
      });
    }
    retrieveTutorials();
  }, []);

  useEffect(() => {
    if (alertType.message) {
      setalert({
        enable: true,
        ...alertType,
      });
    }
  }, [alertType]);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTutorials = () => {};

  const refreshList = () => {
    retrieveTutorials();
  };

  const removeAllTutorials = () => {};

  const findByTitle = () => {};

  const openTutorial = (rowIndex) => {
    const id = tutorialsRef.current[rowIndex].serialNo;

    props.history.push("/tutorials/" + id);
  };

  const deleteTutorial = (rowIndex) => {
    const id = tutorialsRef.current[rowIndex].serialNo;
  };

  return (
    <React.Fragment>
      {alert.enable && <GlobalAlert {...alert} />}
      <div className="bg-card">
        <div className="col-md-12 list">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </React.Fragment>
  );
};
