import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./InternList.module.css";
import { ReactComponent as Vector } from "./assets/vector.svg";

const InternList = () => {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    const fetchInterns = async () => {
      const response = await fetch("http://localhost:3001/interns");
      const interns = await response.json();
      setInterns(interns);
    };
    fetchInterns();
  }, []);


  return (
    <div className={styles.internList}>
      <div className={styles.header}>
        <h1 className={styles.header__content}>Participants</h1>
      </div>
      <ul className={styles.list}>
        {interns.map((intern) => (
          <li className={styles.list__participant} key={intern.id}>
            <p className={styles.participant__name}>{intern.name}</p>
            <NavLink
              className={styles.participant__editLink}
              to={`/interns/${intern.id}`}
            >
              <Vector />
              <span className={styles.editLink__span}>Edit</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternList;
