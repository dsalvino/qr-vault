import React from 'react';

const Container = ({ children }) => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                {children}
            </div>
        </>
    )
}

export default Container;