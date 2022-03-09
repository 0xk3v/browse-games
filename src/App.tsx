import { ReactElement } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = (): ReactElement => {
  return <h1>Hello there</h1>;
};

const App = (): ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
