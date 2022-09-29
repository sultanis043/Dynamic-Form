import React from 'react';
import Employee from './Employee';
import { useState, createContext } from 'react';

export const employeeContext = createContext();

function MainApp() {
    const [employee, setEmployee] = useState({
        id: 1001, name: 'sultan', location: 'bengalore', salary: 123456
    })

    function updateData() {
        setEmployee({
            id: 1002, name: 'salahuddin', location: 'Bang', salary: 1234569
        })
    }

    return (
        <div>
            <employeeContext.Provider value={employee}>
                <h2>MainApp<span>😎</span></h2>
                <Employee />
                <button onClick={() => updateData()}>Click</button>
            </employeeContext.Provider>
        </div>
    )
}

// function Employee() {
//     let context = useContext(employeeContext);
//     console.log(context);
//     return (
//         <div>
//             <h2>Employee:{context.id}</h2>
//             <label htmlFor="">Employee name:{context.name}</label>
//             <Salary />
//         </div>
//     )
// }

// const Salary = () => {
//     let data = useContext(employeeContext)
//     return (
//         <div>
//             <h2>Employee Salary:{data.salary}</h2>
//         </div>
//     )
// }

export default MainApp;