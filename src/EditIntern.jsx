import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import styles from "./EditIntern.module.css";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import EditForm from "./components/EditForm/EditForm";

const EditIntern = () => {
  const { id } = useParams();
  console.log(id);
  const [values, setValues] = useState({
    name: '',
    email: '',
    internshipStart: '',
    internshipEnd: '',
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: 'text',
      label: 'Full name *',
      errorValidationInfo: 'Enter a valid name!',
      pattern: "([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}",
      required: true,
      rowWidth: '100%'
    },
    {
      id: 2,
      name: "email",
      type: 'email',
      label: 'Email address *',
      errorValidationInfo: 'Enter a valid email address!',
      required: true,
      rowWidth: '100%'
    },
    {
      id: 3,
      name: "internshipStart",
      type: 'date',
      label: 'Internship start *',
      errorValidationInfo: 'Start date can not be empty!',
      required: true,
      rowWidth: '50%',
      max: values.internshipEnd
    },
    {
      id: 4,
      name: "internshipEnd",
      type: 'date',
      label: 'Internship end *',
      errorValidationInfo: 'End date can not be empty!',
      required: true,
      rowWidth: '50%',
      min: values.internshipStart
    }
  ]

  const handleChangeInputValue = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    console.log('click submit');
    e.preventDefault();
  }
  useEffect(() => {
    const fetchIntern = async () => {
        const response = await fetch(`http://localhost:3001/interns/${id}`);
        const intern = await response.json();
  
        setValues({
          name: intern.name,
          email: intern.email,
          internshipStart: intern.internshipStart.split('').slice(0,10).join(''),
          internshipEnd: intern.internshipEnd.split('').slice(0,10).join('')
        });
      };
      fetchIntern();
  }, [id]);

  console.log(values);
  return (
      <div className={styles.participantEdit}>
        <NavLink className={styles.linkToBack} to={`/`}>
          <Arrow />
          <span className={styles.linkToBack__span}>Back to list</span>
        </NavLink>
        <div className={styles.header}>
          <h1 className={styles.header__content}>Edit</h1>
        </div>
        <form onSubmit={handleSubmit}>
        {inputs.map(input => (
          <EditForm key={input.id} {...input} value={values[input.name]} handleChangeInputValue={handleChangeInputValue}/>
        ))}
        <button type="submit">Submit</button>
        </form>
      </div>
  );
};

export default EditIntern;
