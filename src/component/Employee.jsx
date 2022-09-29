import React from 'react'
import { useContext } from 'react';
import { employeeContext } from './ContextApp';
import Salary from './Salary';

const Employee = () => {

    const data = useContext(employeeContext);
    // console.log(context);
    return (
        <div>
            <h2>Employee Id:{data.id}</h2>
            <h2>Employee Name:{data.name}</h2>
            <h2>Employee Location:{data.location}</h2>
            {/* <h2>Employee Salary:{data.salary}</h2> */}
            <Salary />
        </div>
    )
}

export default Employee;