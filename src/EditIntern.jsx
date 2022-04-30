import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import styles from './EditIntern.module.css';
import { ReactComponent as Arrow } from './assets/arrow.svg';
import EditForm from './components/EditForm/EditForm';


const EditIntern = () => {
    const { id } = useParams();
    useEffect(() => {
        //TODO: get intern from REST api http://localhost:3001/interns/:id
        console.log(`I want to get intern with id: ${id}!`)
    }, [id]);

    return (
        <>
            <div className={styles.participantEdit}>
                <NavLink className={styles.linkToBack} to={`/`}><Arrow/><span className={styles.linkToBack__span}>Back to list</span></NavLink>
                <div className={styles.header}>
                    <h1 className={styles.header__content}>Edit</h1>
                </div>
                <EditForm/>
            </div>
        </>
    );
};

export default EditIntern;