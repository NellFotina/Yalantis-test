import React from "react";
import "./App.css";
import Employees from "./Component/Employees/Employees";
import EmployeesBirthday from "./Component/EmployeesBirthday/EmployeesBirthday";

const App = () => {
  return (
    <div className="app-wrapper">
      <Employees />
      <EmployeesBirthday />
    </div>
  );
};

export default App;
