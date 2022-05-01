import React, { useEffect, useState } from "react";
import styles from "./EditForm.module.css";
// import { ReactComponent as Calendar } from './assets/arrow.svg';

const EditForm = ({ intern }) => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate() + 3);

  let startDate = new Date()
  startDate.setDate(startDate.getDate());

  const [inputInternshipStart, setInputInternshipStart] = useState(startDate)

 
  useEffect(() => {
    if (intern) {
      setInputNameValue(intern.name);
      setInputEmailValue(intern.email);
    }
  }, [intern]);

  return (
    <form>
      <div className={styles.form__row}>
        <label htmlFor="name">Full name *</label>
        <input
          type="text"
          name="name"
          value={inputNameValue}
          onChange={(e) => setInputNameValue(e.target.value)}
        />
      </div>
      <div className={styles.form__row}>
        <label htmlFor="email">Email address *</label>
        <input
          type="text"
          name="email"
          value={inputEmailValue}
          onChange={(e) => setInputEmailValue(e.target.value)}
        />
      </div>
      <div className={styles.form__row}>
        <div className={styles.form__calendar}>
          <label htmlFor="internshipStart">Internship start *</label>
          <input
            type="date"
            name="internshipStart"
            value={inputInternshipStart.toLocaleDateString("en-CA")}
            onChange={e => setInputInternshipStart(new Date(e.target.value))}
            />
        </div>
        <div className={styles.form__calendar}>
          <label htmlFor="internshipEnd">Internship end *</label>
          <input type="date" name="internshipEnd" />
        </div>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default EditForm;
