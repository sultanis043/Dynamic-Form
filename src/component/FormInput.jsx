import React from "react";
import './forminput.css';

const FormInput = ({ id, label, type, options, value, onchange }) => {

    return (
        <div>
            {(type === "select") ?
                <>
                    <label style={{ paddingRight: '20px' }}>{label}</label>
                    <select name={id} value={value} onChange={onchange} required>
                        <option>Select</option>
                        {options.map((item, i) =>
                            <option key={i}>{item.label}</option>
                        )}
                    </select>
                </>
                :
                ((type === "radio") ?
                    <>
                        <label>{label}</label>
                        {
                            options.map((item, i) => {
                                return (
                                    <>
                                        <label style={{ paddingLeft: '20px' }}>
                                            <input name={id} type={type} key={i} value={value} required onChange={onchange} />
                                            {item.label}
                                        </label>
                                    </>
                                )
                            })
                        }
                    </>
                    :
                    <>
                        <label>{label}</label>
                        <input className="input" name={id} type={type} value={value} required onChange={onchange} />
                    </>)

            }
        </div>
    )
}

export default FormInput;

