import styles from './App.module.css';
import EditIntern from "./EditIntern";
import InternList from "./InternList";
import { Routes, Route } from "react-router-dom";
import { ReactComponent as Logo } from './assets/logo.svg';


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <Routes>
        <Route path="/interns/:id" exact element={<EditIntern />} />
        <Route path="/" element={<InternList />} />
      </Routes>
    </div>
  );
}

export default App;
