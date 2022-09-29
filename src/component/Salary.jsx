import React from "react";

import { useContext } from "react";
import { employeeContext } from "./ContextApp";

const Salary = () => {
    const { salary } = useContext(employeeContext);
    return (
        <div>
            <h2>Employee Salary:{salary}</h2>
        </div>
    )
}

export default Salary;