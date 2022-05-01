import React, { useEffect, useState } from "react";
import styles from "./EditForm.module.css";
// import { ReactComponent as Calendar } from './assets/arrow.svg';

const EditForm = ( { id, label, errorValidationInfo, handleChangeInputValue, rowWidth, ...inputProps } ) => {
  const [focused, setFocused] = useState(false);
  const inputWidth = {
    width: rowWidth,
  }
  return (
   <div className={styles.inputArea} style={inputWidth}>
     <label>{label}</label>
     <input {...inputProps} onChange={handleChangeInputValue} onBlur={() => setFocused(true)} focused={focused.toString()}/>
     <span className={styles.errorValidationInfo}>{errorValidationInfo}</span>
   </div>
  );
};

export default EditForm;
