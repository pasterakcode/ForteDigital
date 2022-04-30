import React from 'react';
import styles from './EditForm.module.css'
// import { ReactComponent as Calendar } from './assets/arrow.svg';

const EditForm = () => {

    return (
                <form>
                    <div className={styles.form__row}>
                        <label htmlFor="name">Full name *</label>
                        <input type="text" name="name"/>  
                    </div>
                    <div className={styles.form__row}>
                        <label htmlFor="email">Email address *</label>
                        <input type="text" name="email" />
                    </div>
                    <div className={styles.form__row}>
                        <div className={styles.form__calendar}>
                            <label htmlFor="internshipStart">Internship start *</label>
                            <input type="date" name="internshipStart" />
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