import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./InternList.module.css";
import { ReactComponent as Vector } from "./assets/vector.svg";
import LoadingState from "./components/stateComponent/LoadingState";
import ErrorState from "./components/stateComponent/ErrorState";
import axios from "axios";

const InternList = () => {
  const [interns, setInterns] = useState();
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState({ state: false, message: "" });

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const response = await axios.get("http://localhost:3001/interns");
        (response.data.length > 0) ? setInterns(response.data) : setErrorState({ state: true, message: "The database does not contain any entries" });
      } catch (error) {
        setErrorState({ state: true, message: error.message });
      }
    };
    fetchInterns();
  }, []);

  useEffect(() => {
    setLoadingState(false);
  }, [interns]);
  return (
    <div className={styles.internList}>
      <div className={styles.header}>
        <h1 className={styles.header__content}>Participants</h1>
      </div>
      {errorState.state ? (
        <ErrorState message={errorState.message} />
      ) : loadingState ? (
        <LoadingState />
      ) : (
        <ul className={styles.list}>
          {interns &&
            interns.map((intern) => (
              <li className={styles.list__participant} key={intern.id}>
                <p className={styles.participant__name}>{intern.name? intern.name : "No name"}</p>
                <NavLink
                  className={styles.participant__editLink}
                  to={`/interns/${intern.id}`}
                >
                <span className={styles.internshipDate}>{intern.internshipStart? intern.internshipStart.split("").slice(0, 10).join("") : "b/d"} - {intern.internshipEnd? intern.internshipEnd.split("").slice(0, 10).join("") : "b/d"}</span>
                  <Vector />
                  <span className={styles.editLink__span}>Edit</span>
                </NavLink>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default InternList;
