import React, { useState } from "react";

const EmployeesList = (props) => {
  const { employees } = props;
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <React.Fragment>
      <div className="controls">
        <input
          type="text"
          className="filter-input"
          data-testid="filter-input"
          onChange={handleChange}
        />
      </div>
      <ul className="employees-list">
        {employees.map((employee) => {
          if (employee.name.toLowerCase().includes(searchValue)) {
            return (
              <li key={employee.name} data-testid="employee">
                {employee.name}
              </li>
            );
          }
        })}
      </ul>
    </React.Fragment>
  );
};

export default EmployeesList;
