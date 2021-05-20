import React from 'react';

const Container = ({ children }) => {
    return (
        <>
            <div className="h-75 d-flex justify-content-center align-items-center">
                {children}
            </div>
        </>
    )
}

export default Container;