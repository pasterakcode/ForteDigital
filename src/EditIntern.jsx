import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import styles from "./EditIntern.module.css";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import EditForm from "./components/EditForm/EditForm";

const EditIntern = () => {
  const { id } = useParams();
  const [intern, setIntern] = useState([]);

  useEffect(() => {
    const fetchIntern = async () => {
        const response = await fetch(`http://localhost:3001/interns/${id}`);
        const intern = await response.json();
        setIntern(intern);
      };
      fetchIntern();
  }, [id]);


  return (
    <>
      <div className={styles.participantEdit}>
        <NavLink className={styles.linkToBack} to={`/`}>
          <Arrow />
          <span className={styles.linkToBack__span}>Back to list</span>
        </NavLink>
        <div className={styles.header}>
          <h1 className={styles.header__content}>Edit</h1>
        </div>
        <EditForm intern={intern}/>
      </div>
    </>
  );
};

export default EditIntern;
