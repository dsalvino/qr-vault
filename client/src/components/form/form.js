import React from 'react';

export const Form = ({ props, children }) => {
    return (
        <>
    <form className="col-md-5 form-background needs-validation" {...props}>
        {children}
    </form>
        </>
    )
}

export const Select = ({ props, children }) => {
    return (
        <>
    <select className="form-select" aria-label="select example" {...props}>
        {children}
    </select>
        </>
    )
}

export const Option = ({ children, props, selected, disabled }) => {
    return (
        <>
        <option value={`${props.value} ${selected ? "selected" : ""} ${disabled ? "disabled" : ""}`}>{children}</option>
        </>
    )
}