import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import styles from "./EditIntern.module.css";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import EditForm from "./components/EditForm/EditForm";
import LoadingState from "./components/stateComponent/LoadingState";
import ErrorState from "./components/stateComponent/ErrorState";

const EditIntern = () => {
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState({ state: false, message: "" });
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    email: "",
    internshipStart: "",
    internshipEnd: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      label: "Full name *",
      placeholder: "Enter name",
      errorValidationInfo: "Enter a valid name!",
      pattern: "([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}",
      required: true,
      rowWidth: "100%",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email address *",
      errorValidationInfo: "Enter a valid email address!",
      required: true,
      rowWidth: "100%",
    },
    {
      id: 3,
      name: "internshipStart",
      type: "date",
      label: "Internship start *",
      errorValidationInfo: "Start date can not be empty!",
      required: true,
      rowWidth: "50%",
      max: values.internshipEnd,
    },
    {
      id: 4,
      name: "internshipEnd",
      type: "date",
      label: "Internship end *",
      errorValidationInfo: "End date can not be empty!",
      required: true,
      rowWidth: "50%",
      min: values.internshipStart,
    },
  ];

  const handleChangeInputValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const redirectToHomePage = () => {
    window.location.href = "/";
  };
  const updateDatabase = async () => {
    try {
      await axios.put(`http://localhost:3001/interns/${id}`, { ...values });
      return true;
    } catch (error) {
      setErrorState({ state: true, message: error.message });
    }
  };
  const greenSignalAfterUpdateData = () => {
    const editBox = document.querySelector('#btnSubmit');
    editBox.style.background = "#508643";
  }
  const handleSubmitForm = e => {
    e.preventDefault();
    if (updateDatabase()){
      greenSignalAfterUpdateData();
      setTimeout(() => {
        redirectToHomePage();
      }, 300);
    }
  };
  const handleFetchIntern = (intern) => {
    setValues({
      name: intern.name ? intern.name : "",
      email: intern.email ? intern.email : "",
      internshipStart: intern.internshipStart? intern.internshipStart.split("").slice(0, 10).join("") : "",
      internshipEnd: intern.internshipEnd? intern.internshipEnd.split("").slice(0, 10).join("") : "",
    });
  };
  useEffect(() => {
    const uploadData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/interns/${id}`);
        handleFetchIntern(response.data);
        setLoadingState(false);
      } catch (error) {
        setErrorState({ state: true, message: error.message });
      }
    };
    uploadData();
  }, [id]);

  return (
    <div className={styles.participantEdit} id="participantEdit">
      <NavLink className={styles.linkToBack} to={`/`}>
        <Arrow />
        <span className={styles.linkToBack__span}>Back to list</span>
      </NavLink>
      <div className={styles.header}>
        <h1 className={styles.header__content}>Edit</h1>
      </div>
      {errorState.state ? (
        <ErrorState message={errorState.message} />
      ) : loadingState ? (
        <LoadingState />
      ) : (
        <form onSubmit={handleSubmitForm}>
          {inputs.map((input) => (
            <EditForm
              key={input.id}
              {...input}
              value={values[input.name]}
              handleChangeInputValue={handleChangeInputValue}
            />
          ))}
          <button type="submit" id="btnSubmit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default EditIntern;
