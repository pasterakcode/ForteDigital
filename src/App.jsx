import styles from "./App.module.css";
import EditIntern from "./EditIntern";
import InternList from "./InternList";
import { Routes, Route } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/logo.svg";

function App() {
  return (
    <div className={styles.app}>
      <a href="https://fortedigital.no/en"><div className={styles.logoContainer}>
        <Logo />
      </div></a>
      <Routes>
        <Route path="/interns/:id" element={<EditIntern />} />
        <Route path="/" exact element={<InternList />} />
      </Routes>
    </div>
  );
}

export default App;
