import React from 'react';
import { useState, useEffect } from 'react';
import FormInput from './FormInput';
import { Json_Data } from './data.js';
import './form.css'

const initialFormData = Object.freeze({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    email: "",
    maritalStatus: "",
    address: ""
});

function Form() {
    const [data, setData] = useState({});
    const [inputvalue, setInputvalue] = useState(initialFormData);

    useEffect(() => {
        setData(Json_Data[0]);
    }, [])


    const handleSubmit = e => {
        e.preventDefault();
        alert("Data submit successfull😎", inputvalue);
        console.log("Input data", inputvalue);
        e.target.reset();
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setInputvalue({ ...inputvalue, [name]: value });
    }

    const { formHeading, fields } = data;
    return (
        <div >
            <h2 style={
                {
                    color: 'blue',
                    padding: '20px',
                }
            }>{formHeading} : Fill Details</h2>
            <form onSubmit={handleSubmit}>
                {
                    fields ? fields.map((item, i) => {
                        return (
                            <FormInput {...item} key={i} required={true} onchange={handleChange} />
                        )
                    }) : null
                }
                <input type={"submit"} />
            </form>
        </div>
    )
};

export default Form;