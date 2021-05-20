import React from 'react';

export const Form = ({  children, ...props }) => {
    return (
        <>
            <form className="col-md-11 form-background needs-validation d-flex flex-column" {...props}>
                {children}
            </form>
        </>
    )
}

export const Select = ({ children, ...props }) => {
    return (
        <>
            <select className="form-select" aria-label="select example" {...props}>
                {children}
            </select>
        </>
    )
}

export const Option = ({ children, ...props }) => {
    return (
        <>
            <option {...props}>{children}</option>
        </>
    )
}

export const Input = ({ ...props }) => {
    return (
        <>
            <input type={`${props.type}`} {...props}></input>
        </>
    )
}